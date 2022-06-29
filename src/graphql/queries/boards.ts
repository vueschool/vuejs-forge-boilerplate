import gql from "graphql-tag";

export const BOARDS_LIST_QUERY = gql`
  {
    boardsList {
      items {
        id
        order
        title
        updatedAt
        createdAt
        image {
          downloadUrl
        }
      }
    }
  }
`;

export const BOARD_CREATE_MUTATION = gql`
  mutation boardCreate($title: String!, $order: JSON!) {
    boardCreate(data: { title: $title, order: $order }) {
      id
      title
      order
    }
  }
`;

export const DELETE_BOARD_MUTATION = gql`
  mutation deleteBoard($id: ID!) {
    boardDelete(filter: { id: $id }, force: true) {
      success
    }
  }
`;

export const GET_BOARD_QUERY = gql`
  query getBoard($id: ID) {
    board(id: $id) {
      id
      title
      order
      createdAt
      updatedAt
      image {
        id
        downloadUrl
      }
      tasks {
        items {
          id
          title
          description
          createdAt
          updatedAt
          dueAt
        }
      }
    }
  }
`;

export const UPDATE_BOARD_MUTATION = gql`
  mutation boardUpdate($id: ID, $order: JSON, $title: String) {
    boardUpdate(filter: { id: $id }, data: { order: $order, title: $title }) {
      id
      title
      order
    }
  }
`;
