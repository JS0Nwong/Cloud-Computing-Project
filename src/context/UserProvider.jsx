import { createContext, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  getChatroom,
  getUser,
  listUserCRS,
  listUsers,
  messagesByChatroomIdAndCreatedAt,
} from "../graphql/queries";
import {
  onCreateChatroom,
  onCreateMessage,
  onUpdateChatroom,
} from "../graphql/subscriptions";
import { createMessage } from "../graphql/mutations";

export const UserModifyContext = createContext();
export const UserValContext = createContext();

export function UserProvider({ children }) {
  const uid = localStorage.getItem("uid");
  const [user, setUser] = useState(null);
  const [chatrooms, setChatrooms] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [chatIndex, setChatIndex] = useState(0);

  const handleSubmit = async (input) => {
    if (input.trim()) {
      await API.graphql(
        graphqlOperation(createMessage, {
          input: {
            chatroomId: chatrooms.at(chatIndex).chatroomId,
            content: input,
            userId: user.id,
            messageUserId: user.id,
          },
        })
      );
    }
  };

  useEffect(() => {
    const getCurrUser = async () => {
      const res = await API.graphql(graphqlOperation(getUser, { id: uid }));
      const user = res.data.getUser;
      setUser(user);
    };

    const findUsers = async () => {
      const res = await API.graphql(graphqlOperation(listUsers));
      const foundUsers = res.data.listUsers.items;

      setAllUsers(foundUsers.filter((fUser) => fUser.id !== uid));
    };

    getCurrUser();
    findUsers();
  }, []);

  useEffect(() => {
    const chatCreateSub = API.graphql(
      graphqlOperation(onCreateChatroom)
    ).subscribe({
      next: ({ value }) => {
        const val = value.data.onCreateChatroom;
        setTimeout(async () => {
          try {
            const tChat = await API.graphql(
              graphqlOperation(getChatroom, { id: val.id })
            );

            let found =
              tChat.data.getChatroom.users.items.filter(
                (tUser) => tUser.userId === uid
              ).length > 0
                ? true
                : false;

            if (found) {
              const res = await API.graphql(
                graphqlOperation(listUserCRS, {
                  filter: {
                    chatroomId: { eq: val.id },
                    and: [{ userId: { ne: uid } }],
                  },
                })
              );

              const data = res.data.listUserCRS.items.at(0);
              data.chatroom.messages = [];

              setChatrooms((curr) => {
                const memT = JSON.parse(JSON.stringify(curr));

                memT.push(data);

                return memT;
              });
            }
          } catch (err) {
            console.log(err);
          }
        }, 500);
      },
      error: (err) => console.log(err),
    });

    const chatUpdateSub = API.graphql(
      graphqlOperation(onUpdateChatroom)
    ).subscribe({
      next: ({ value }) => {
        const data = value.data.onUpdateChatroom;
        setChatrooms((curr) => {
          curr.at(chatIndex).chatroom.meetingId = data.meetingId;
          return curr;
        });
      },
    });

    const messageCreateSub = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({ value }) => {
        const data = value.data.onCreateMessage;
        if (chatrooms.at(chatIndex).chatroomId === data.chatroomId) {
          setChatrooms((curr) => {
            const memT = JSON.parse(JSON.stringify(curr));

            memT.at(chatIndex).chatroom.messages.push(data);

            return memT;
          });
        }
      },
      error: (err) => console.log(err),
    });

    return () => {
      chatCreateSub.unsubscribe();
      chatUpdateSub.unsubscribe();
      messageCreateSub.unsubscribe();
    };
  }, [chatIndex, chatrooms]);

  useEffect(() => {
    const chatAlter = async () => {
      const cuItems = user ? user.chatrooms.items : [];

      const chatrooms = [];

      for (const coll of cuItems) {
        const res = await API.graphql(
          graphqlOperation(listUserCRS, {
            filter: {
              chatroomId: { eq: coll.chatroomId },
              and: [{ userId: { ne: user.id } }],
            },
          })
        );

        const room = res.data.listUserCRS.items.at(0);

        const cUser = await API.graphql(
          graphqlOperation(messagesByChatroomIdAndCreatedAt, {
            chatroomId: room.chatroomId,
            sortDirection: "ASC",
          })
        );

        room.chatroom.messages =
          cUser.data.messagesByChatroomIdAndCreatedAt.items;
        chatrooms.push(room);
      }

      setChatrooms(chatrooms);
    };

    chatAlter();
  }, [user]);

  return (
    <UserModifyContext.Provider
      value={{
        setChatIndex: setChatIndex,
        handleSubmit: handleSubmit,
      }}
    >
      <UserValContext.Provider
        value={{
          user: user,
          chatrooms: chatrooms,
          allUsers: allUsers,
          chatIndex: chatIndex,
        }}
      >
        {allUsers && user && children}
      </UserValContext.Provider>
    </UserModifyContext.Provider>
  );
}
