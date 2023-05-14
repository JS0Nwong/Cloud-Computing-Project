/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      chatroomId
      content
      createdAt
      updatedAt
      messageUserId
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      chatroomId
      content
      createdAt
      updatedAt
      messageUserId
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      chatroomId
      content
      createdAt
      updatedAt
      messageUserId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      about
      online
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      about
      online
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      about
      online
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onCreateChatroom(filter: $filter) {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onUpdateChatroom(filter: $filter) {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onDeleteChatroom(filter: $filter) {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          chatroom {
            id
            name
            meetingId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          user {
            id
            username
            about
            online
            createdAt
            updatedAt
          }
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCR = /* GraphQL */ `
  subscription OnCreateUserCR($filter: ModelSubscriptionUserCRFilterInput) {
    onCreateUserCR(filter: $filter) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        meetingId
        users {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCR = /* GraphQL */ `
  subscription OnUpdateUserCR($filter: ModelSubscriptionUserCRFilterInput) {
    onUpdateUserCR(filter: $filter) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        meetingId
        users {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCR = /* GraphQL */ `
  subscription OnDeleteUserCR($filter: ModelSubscriptionUserCRFilterInput) {
    onDeleteUserCR(filter: $filter) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        chatrooms {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        meetingId
        users {
          items {
            id
            userId
            chatroomId
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            userId
            chatroomId
            content
            createdAt
            updatedAt
            messageUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
