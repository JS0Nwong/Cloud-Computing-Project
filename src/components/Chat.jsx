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
        backgroundImage: "linear-gradient(#444A9E, #6E3A9F, #933D9E)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.darkPurpleBase,
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

  const { user } = useContext(UserValContext);
  const currentUser = user.username;

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
      marginBottom: "10px",
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
       <Avatar sx={{ mr: isSentByCurrentUser ? 2 : 0, ml: isSentByCurrentUser ? 0 : 0 }} />
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
    <Box sx={{ height: "100%", paddingLeft: 2, paddingRight: 2, overflow: "hidden" }}>
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
