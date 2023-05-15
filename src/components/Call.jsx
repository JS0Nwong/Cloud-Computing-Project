import { Avatar, Box, IconButton, Typography } from "@mui/material";
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from "amazon-chime-sdk-js";
import { useContext, useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { addAttendee, createMeeting, getMeeting } from "../graphql/mutations";
import { colors } from "../styles/colors";
import { UserValContext } from "../context/UserProvider";
import { updateChatroom } from "../graphql/mutations";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

export const Call = ({ close }) => {
  const { user, chatrooms, chatIndex } = useContext(UserValContext);
  const [meetingSession, setMeetingSession] = useState();
  const [attendees, setAttendees] = useState([]);
  const [volLevel, setVolLevel] = useState(Array(2).fill(null));
  const [micOff, setMicOff] = useState(true);
  const outRef = useRef();
  const containerRef = useRef();
  const dragRef = useRef();
  const meetingId = chatrooms.at(chatIndex).chatroom.meetingId;
  const otherUser = chatrooms.at(chatIndex).user;
  const groupAtten = [user, otherUser];

  useEffect(() => {
    const chimeExec = async (meetingData) => {
      const attendeeResponse = await API.graphql(
        graphqlOperation(addAttendee, {
          meetingId: meetingData.Meeting.MeetingId,
          userId: user.id,
        })
      );

      const attendeeData = JSON.parse(
        attendeeResponse.data.addAttendee.body
      ).attendeeInfo;

      const config = new MeetingSessionConfiguration(meetingData, attendeeData);

      const logger = new ConsoleLogger("chat-logger", LogLevel.OFF);
      const deviceController = new DefaultDeviceController(logger);

      const sesh = new DefaultMeetingSession(config, logger, deviceController);

      setMeetingSession(sesh);
    };

    const spawnMeeting = async () => {
      const meetingRes = await API.graphql(
        graphqlOperation(createMeeting, { region: "us-east-1" })
      );
      const meetingData = JSON.parse(
        meetingRes.data.createMeeting.body
      ).meetingInfo;

      await API.graphql(
        graphqlOperation(updateChatroom, {
          input: {
            id: chatrooms.at(chatIndex).chatroom.id,
            meetingId: meetingData.Meeting.MeetingId,
          },
        })
      );

      await chimeExec(meetingData);
    };

    const meetingConf = async () => {
      if (meetingId) {
        const meetingRes = await API.graphql(
          graphqlOperation(getMeeting, { meetingId: meetingId })
        );

        if (meetingRes.data.getMeeting.statusCode === 200) {
          const meetingData = JSON.parse(
            meetingRes.data.getMeeting.body
          ).meetingInfo;
          await chimeExec(meetingData);
        } else {
          await spawnMeeting();
        }
      } else {
        await spawnMeeting();
      }
    };

    meetingConf();
  }, []);

  useEffect(() => {
    const soundVidObserver = {};
    const attendeeLog = (id) => {
      setAttendees((curr) => {
        if (!curr.includes(id)) {
          return [...curr, id];
        } else return curr;
      });
    };

    if (meetingSession) {
      const startDevices = async () => {
        const audioVideo = meetingSession.audioVideo;
        audioVideo.setDeviceLabelTrigger(
          async () => await navigator.mediaDevices.getUserMedia({ audio: true })
        );

        const audioInputDevices = await audioVideo.listAudioInputDevices();
        const audioOutputDevices = await audioVideo.listAudioOutputDevices();
        await audioVideo.bindAudioElement(outRef.current);
        await audioVideo.chooseAudioOutput(audioOutputDevices.at(0).deviceId);
        await audioVideo.startAudioInput(audioInputDevices.at(0));
        audioVideo.addObserver(soundVidObserver);
        audioVideo.realtimeSubscribeToAttendeeIdPresence(attendeeLog);
        audioVideo.realtimeMuteLocalAudio();
        audioVideo.start();
      };
      startDevices();
    }

    return async () => {
      if (meetingSession) {
        const audioVideo = meetingSession.audioVideo;
        audioVideo.removeObserver(soundVidObserver);
        audioVideo.realtimeUnsubscribeToAttendeeIdPresence(attendeeLog);
        await audioVideo.stopAudioInput();
        await audioVideo.stop();
      }
    };
  }, [meetingSession, meetingId, outRef]);

  useEffect(() => {
    const volLog = (id, vol) => {
      const i = attendees.indexOf(id);

      if (i !== -1) {
        setVolLevel((curr) => {
          const temp = [...curr];
          temp[i] = vol;
          return temp;
        });
      }
    };

    if (attendees.length > 0) {
      attendees.forEach((attendee) =>
        meetingSession.audioVideo.realtimeSubscribeToVolumeIndicator(
          attendee,
          volLog
        )
      );
    }

    return () => {
      attendees.forEach((attendee) =>
        meetingSession.audioVideo.realtimeUnsubscribeFromVolumeIndicator(
          attendee
        )
      );
    };
  }, [attendees]);

  useEffect(() => {
    const inst = dragRef.current;
    containerRef.current.style.height = "500px";
    let pos;

    const mouseDown = (e) => {
      pos = e.y;
      window.addEventListener("mousemove", resize);
    };

    const mouseUp = () => {
      window.removeEventListener("mousemove", resize);
    };

    const resize = (e) => {
      const diff = e.y - pos;
      pos = e.y;
      containerRef.current.style.height =
        parseInt(containerRef.current.style.height) + diff * 6 + "px";
    };

    inst.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      inst.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [dragRef, containerRef]);

  const handleMute = () => {
    if (micOff) {
      meetingSession.audioVideo.realtimeUnmuteLocalAudio();
      setMicOff(false);
    } else {
      meetingSession.audioVideo.realtimeMuteLocalAudio();
      setMicOff(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.darkPurpleBase,
          width: "100%",
          minHeight: "30%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        ref={containerRef}
      >
        <audio ref={outRef} style={{ display: "none" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            width: "40%",
          }}
        >
          {attendees.length > 0 &&
            attendees.map((attendee, i) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={attendee}
                >
                  <Avatar
                    sx={{
                      height: 75,
                      width: 75,
                      border: `3px solid ${
                        volLevel.at(i) && volLevel.at(i) > 0.2
                          ? "#10cc45"
                          : "transparent"
                      }`,
                    }}
                  />
                  <Typography sx={{ mt: 1 }}>
                    {groupAtten.at(i).username}
                  </Typography>
                </Box>
              );
            })}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: micOff ? "white" : colors.gray,
              color: micOff ? "black" : "white",
              m: 1,
              width: 45,
              height: 45,
              "&:hover": {
                backgroundColor: micOff ? "white" : colors.gray,
              },
            }}
            onClick={handleMute}
          >
            {micOff ? <MicOffIcon /> : <MicIcon />}
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "red",
              color: "white",
              m: 1,
              width: 45,
              height: 45,
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={close}
          >
            <CallEndIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        ref={dragRef}
        sx={{
          height: "5px",
          width: "100%",
          position: "relative",
          cursor: "ns-resize",
        }}
      />
    </>
  );
};
