import { useContext, useEffect, useRef, useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { MessageInput } from "./MessageInput";
import { colors } from "../styles/colors";
import { Call } from "./Call";
import { SignOutButton } from "../components/SignOutButton";
import { UserValContext } from "../context/UserProvider";

export default function Chat() {
  const { chatrooms, chatIndex } = useContext(UserValContext);
  const chatsPresent = chatrooms.length > 0;
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Box
      sx={{
        flex: 5,
        position: "relative",
        backgroundImage: "linear-gradient(#444A9E, #6E3A9F, #933D9E)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {!callOpen && (
        <Box
          sx={{
            backgroundColor: colors.darkPurpleBase,
            p: 1,
            display: "flex",
            justifyContent: chatsPresent ? "space-between" : "flex-end",
            alignItems: "center",
          }}
        >
          {chatsPresent && !callOpen && (
            <Typography sx={{ fontSize: 18 }}>
              {chatrooms.at(chatIndex).user.username}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: chatsPresent ? "space-between" : "flex-end",
              alignItems: "center",
              width: 90,
            }}
          >
            {chatsPresent && (
              <IconButton
                sx={{ color: "inherit" }}
                onClick={() => setCallOpen(true)}
              >
                <PhoneIcon />
              </IconButton>
            )}
            <SignOutButton />
          </Box>
        </Box>
      )}
      {chatsPresent ? (
        <Chatroom callOpen={callOpen} close={() => setCallOpen(false)} />
      ) : (
        <NoUserAdded />
      )}
    </Box>
  );
}

const NoUserAdded = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
      }}
    >
      <Typography sx={{ fontSize: 20, placeSelf: "center" }}>
        Add a user to get started <strong>(Press the "+")</strong>
      </Typography>
    </Box>
  );
};

const Chatroom = ({ callOpen, close }) => {
  const { user, chatrooms, chatIndex } = useContext(UserValContext);
  const currChatroom = chatrooms.at(chatIndex);
  const bRef = useRef();
  const currentUser = user.username;

  useEffect(() => {
    bRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currChatroom, callOpen]);

  useEffect(() => {
    return close;
  }, [chatIndex]);

  const ChatMessage = ({ user, content, date }) => {
    const tempDate = new Date(date);
    const fDate = tempDate.toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const isSentByCurrentUser = user.username === currentUser;

    const bubbleStyles = {
      height: "auto",
      padding: "10px",
      borderRadius: "20px",
      borderBottomLeftRadius: !isSentByCurrentUser && "5px",
      borderBottomRightRadius: isSentByCurrentUser && "5px",
      marginBottom: "20px",
      marginLeft: "3px",
      marginRight: "3px",
      wordBreak: "break-word",
      backgroundColor: isSentByCurrentUser ? "#2979FF" : "#F3F3F3",
      color: isSentByCurrentUser ? "#FFF" : "#000",
      alignSelf: isSentByCurrentUser ? "flex-end" : "flex-start",
    };
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: isSentByCurrentUser ? "row-reverse" : "row",
          marginBottom: "10px",
          marginLeft: isSentByCurrentUser ? "50%" : 0,
          marginRight: isSentByCurrentUser ? 0 : "50%",
        }}
      >
        <Avatar
          sx={{
            mr: isSentByCurrentUser ? 2 : 0,
            ml: isSentByCurrentUser ? 0 : 0,
          }}
        />
        <Box sx={{ ml: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isSentByCurrentUser ? "flex-end" : "flex-start",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
              {user.username}
            </Typography>
            <Typography sx={{ ml: 2, fontSize: 12, color: "#a2a3a6" }}>
              {fDate.split(",").join("")}
            </Typography>
          </Box>

          <Box sx={{ wordBreak: "break-word" }}>
            <Box sx={bubbleStyles}>
              <Typography
                sx={{
                  fontSize: 16,
                  overflowWrap: "break-word",
                }}
              >
                {content}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {callOpen && (
        <Call userId1={user.id} userId2={currChatroom.user.id} close={close} />
      )}
      <Box
        sx={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          mx: 1,
          my: "2px",
          flexGrow: 1,
        }}
      >
        {currChatroom.chatroom.messages.map((message) => {
          return (
            <ChatMessage
              user={message.user}
              content={message.content}
              date={message.createdAt}
              key={message.id}
            />
          );
        })}
        <div ref={bRef} />
      </Box>
      <Box
        sx={{
          width: "95%",
          backgroundColor: colors.base,
          mb: 5,
          display: "flex",
        }}
      >
        <MessageInput />
      </Box>
    </Box>
  );
};
