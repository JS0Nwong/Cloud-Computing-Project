/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        userID
        chatroomID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
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
export const listChatrooms = /* GraphQL */ `
  query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserCR = /* GraphQL */ `
  query GetUserCR($id: ID!) {
    getUserCR(id: $id) {
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
export const listUserCRS = /* GraphQL */ `
  query ListUserCRS(
    $filter: ModelUserCRFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCRS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        chatroom {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByUserIDAndContent = /* GraphQL */ `
  query MessagesByUserIDAndContent(
    $userID: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserIDAndContent(
      userID: $userID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        userID
        chatroomID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatroomIDAndContent = /* GraphQL */ `
  query MessagesByChatroomIDAndContent(
    $chatroomID: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomIDAndContent(
      chatroomID: $chatroomID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        userID
        chatroomID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userCRSByUserId = /* GraphQL */ `
  query UserCRSByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCRFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCRSByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        chatroom {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userCRSByChatroomId = /* GraphQL */ `
  query UserCRSByChatroomId(
    $chatroomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCRFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCRSByChatroomId(
      chatroomId: $chatroomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          createdAt
          updatedAt
        }
        chatroom {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
