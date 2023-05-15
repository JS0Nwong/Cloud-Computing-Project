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
        backgroundColor: colors.base,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {!callOpen && (
        <Box
          sx={{
            backgroundColor: colors.base,
            p: 1,
            display: "flex",
            justifyContent: chatsPresent ? "space-between" : "flex-end",
            alignItems: "center",
            border: "0px",
            borderStyle: "solid",
            borderBottomWidth: "2px",
            borderBottomColor: "#2a2c32",
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

  useEffect(() => {
    bRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currChatroom, callOpen]);

  useEffect(() => {
    return close;
  }, [chatIndex]);

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

const ChatMessage = ({ user, content, date }) => {
  const tempDate = new Date(date);
  const fDate = tempDate.toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", my: 2, ml: 4, mr: 2 }}>
      <Avatar />
      <Box sx={{ ml: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
            {user.username}
          </Typography>
          <Typography sx={{ ml: 2, fontSize: 12, color: "#a2a3a6" }}>
            {fDate.split(",").join("")}
          </Typography>
        </Box>
        <Box sx={{ wordBreak: "break-all" }}>
          <Typography sx={{ fontSize: 16 }}>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
