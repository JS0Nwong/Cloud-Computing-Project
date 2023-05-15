import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "../styles/colors";
import { API, graphqlOperation } from "aws-amplify";
import { createChatroom, createUserCR } from "../graphql/mutations";
import { UserValContext, UserModifyContext } from "../context/UserProvider";
import { listUserCRS } from "../graphql/queries";
import { ErrorSnack } from "./ErrorSnack";

export default function Chats() {
  const { user, chatrooms, allUsers, chatIndex } = useContext(UserValContext);
  const { setChatIndex } = useContext(UserModifyContext);

  const [open, setOpen] = useState(false);
  const [currUsers, setCurrUsers] = useState(allUsers);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (e) => {
    const filtered = allUsers.filter((user) =>
      user.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCurrUsers(filtered);
  };

  const handleAdd = async (altUser, i) => {
    try {
      const chatIds = [];

      for (const chat of chatrooms) {
        chatIds.push({ chatroomId: { eq: chat.chatroomId } });
      }

      const res =
        chatIds.length > 0 &&
        (await API.graphql(
          graphqlOperation(listUserCRS, {
            filter: {
              or: chatIds,
              and: [{ userId: { eq: altUser.id } }],
            },
          })
        ));

      const chatExists =
        chatIds.length === 0 ? false : res.data.listUserCRS.items.length > 0;

      if (chatExists) {
        setError("Chat between user already exists");
      } else {
        setDisabled((curr) => ({ ...curr, [i]: true }));

        const chatroom = await API.graphql(
          graphqlOperation(createChatroom, { input: {} })
        );

        const chatId = chatroom.data.createChatroom.id;

        await API.graphql(
          graphqlOperation(createUserCR, {
            input: { userId: user.id, chatroomId: chatId },
          })
        );

        await API.graphql(
          graphqlOperation(createUserCR, {
            input: { userId: altUser.id, chatroomId: chatId },
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ChatButton = ({ user, i }) => {
    return (
      <ButtonBase
        sx={{
          p: 1,
          m: 1,
          cursor: "pointer",
          borderRadius: 1,
          width: "90%",
          "&:hover": { backgroundColor: colors.lightGray },
          backgroundColor: i === chatIndex && colors.lightGray,
        }}
        onClick={() => setChatIndex(i)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar />
          <Typography sx={{ ml: 2 }}>{user.username}</Typography>
        </Box>
      </ButtonBase>
    );
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.darkPurpleBase,
          width: "100%",
          fontWeight: 500,
          position: "relative",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 15 }}>
            DIRECT MESSAGES
          </Typography>
          <ButtonBase
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            onClick={handleOpen}
            disableRipple
          >
            <AddIcon sx={{ color: colors.blue, height: "auto", width: 30 }} />
          </ButtonBase>
        </Box>
        <Box sx={{ overflowY: "auto", overflowX: "hidden" }}>
          {chatrooms &&
            chatrooms.map((room, i) => {
              return <ChatButton user={room.user} key={room.id} i={i} />;
            })}
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            backgroundColor: colors.ddBase,
            width: "100%",
            p: 1,
            alignItems: "center",
          }}
        >
          <Avatar />
          <Typography sx={{ ml: 2, fontSize: 18, fontWeight: 700 }}>
            {user.username}
          </Typography>
        </Box>
      </Box>
      <ErrorSnack error={error} handleError={setError} />
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: colors.dBase,
            width: 300,
            height: 500,
            alignSelf: "center",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              backgroundColor: colors.ddBase,
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
              height: "6%",
            }}
          >
            <SearchIcon sx={{ p: 0, color: colors.blue }} />
            <InputBase sx={{ pl: 1, color: "white" }} onChange={handleSearch} />
          </Box>
          <Box sx={{ overflowY: "scroll", height: "90%" }}>
            {currUsers.map((user, i) => (
              <Box
                sx={{
                  height: 50,
                  backgroundColor: colors.ddBase,
                  m: 1,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
                key={i}
              >
                <Avatar sx={{ m: 1 }} />
                <Typography>{user.username}</Typography>
                <Button
                  sx={{
                    position: "absolute",
                    right: 0,
                    height: "100%",
                    borderRadius: 0,
                    "&.Mui-disabled": {
                      color: "gray",
                    },
                  }}
                  disabled={disabled[i]}
                  onClick={() => handleAdd(user, i)}
                >
                  <AddIcon />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
