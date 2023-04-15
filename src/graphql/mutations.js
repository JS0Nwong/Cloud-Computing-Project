/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      chatroomID
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      chatroomID
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      chatroomID
      content
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      about
      messages {
        items {
          id
          userID
          chatroomID
          content
          createdAt
          updatedAt
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
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      about
      messages {
        items {
          id
          userID
          chatroomID
          content
          createdAt
          updatedAt
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
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      about
      messages {
        items {
          id
          userID
          chatroomID
          content
          createdAt
          updatedAt
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
  }
`;
export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
      id
      name
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
          userID
          chatroomID
          content
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
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
      id
      name
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
          userID
          chatroomID
          content
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
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
      id
      name
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
          userID
          chatroomID
          content
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
export const createUserCR = /* GraphQL */ `
  mutation CreateUserCR(
    $input: CreateUserCRInput!
    $condition: ModelUserCRConditionInput
  ) {
    createUserCR(input: $input, condition: $condition) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        users {
          nextToken
        }
        messages {
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
export const updateUserCR = /* GraphQL */ `
  mutation UpdateUserCR(
    $input: UpdateUserCRInput!
    $condition: ModelUserCRConditionInput
  ) {
    updateUserCR(input: $input, condition: $condition) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        users {
          nextToken
        }
        messages {
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
export const deleteUserCR = /* GraphQL */ `
  mutation DeleteUserCR(
    $input: DeleteUserCRInput!
    $condition: ModelUserCRConditionInput
  ) {
    deleteUserCR(input: $input, condition: $condition) {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        messages {
          nextToken
        }
        chatrooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatroom {
        id
        name
        users {
          nextToken
        }
        messages {
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
