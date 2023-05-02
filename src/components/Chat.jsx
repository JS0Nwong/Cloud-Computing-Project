import { useContext } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";
import { MessageInput } from "./MessageInput";
import { colors } from "../styles/colors";
import { SignOutButton } from "../components/SignOutButton";
import { UserValContext } from "../context/UserProvider";

export default function Chat() {
  const { chatrooms, chatIndex } = useContext(UserValContext);
  const chatsPresent = chatrooms.length > 0;

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
      <Box
        sx={{
          backgroundColor: colors.base,
          p: 1,
          display: "flex",
          justifyContent: chatsPresent ? "space-between" : "flex-end",
          alignItems: "center",
        }}
      >
        {chatsPresent && (
          <Typography sx={{ fontSize: 18 }}>
            {chatrooms.at(chatIndex).user.username}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 125,
          }}
        >
          <PhoneIcon />
          <VideocamIcon />
          <SignOutButton />
        </Box>
      </Box>
      {chatsPresent ? (
        <Chatroom chatrooms={chatrooms} chatIndex={chatIndex} />
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

const Chatroom = ({ chatrooms, chatIndex }) => {
  const messages = chatrooms.at(chatIndex).chatroom.messages;

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

  return (
    <Box sx={{ height: "100%", p: 1, overflow: "hidden" }}>
      <Box
        sx={{
          height: "90%",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {messages.map((message) => {
          return (
            <ChatMessage
              user={message.user}
              content={message.content}
              date={message.createdAt}
              key={message.id}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: colors.base,
          height: "10%",
        }}
      >
        <MessageInput />
      </Box>
    </Box>
  );
};
