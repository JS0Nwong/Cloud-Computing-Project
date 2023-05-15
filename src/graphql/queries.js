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
          online
          messages {
            nextToken
          }
          chatrooms {
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
      nextToken
    }
  }
`;
export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
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
          online
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
          meetingId
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
      nextToken
    }
  }
`;
export const messagesByUserIdAndContent = /* GraphQL */ `
  query MessagesByUserIdAndContent(
    $userId: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserIdAndContent(
      userId: $userId
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
          online
          messages {
            nextToken
          }
          chatrooms {
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
      nextToken
    }
  }
`;
export const messagesByChatroomIdAndCreatedAt = /* GraphQL */ `
  query MessagesByChatroomIdAndCreatedAt(
    $chatroomId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomIdAndCreatedAt(
      chatroomId: $chatroomId
      createdAt: $createdAt
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
          online
          messages {
            nextToken
          }
          chatrooms {
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
      nextToken
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          online
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
          meetingId
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
          online
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
          meetingId
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
      nextToken
    }
  }
`;
