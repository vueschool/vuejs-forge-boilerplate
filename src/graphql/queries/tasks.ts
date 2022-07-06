import gql from "graphql-tag";
export const GET_TASK_QUERY = gql`
  query GET_TASK($id: ID!) {
    task(id: $id) {
      title
      description
      dueAt
      labels {
        items {
          id
          label
          color
        }
      }
      comments {
        items {
          message
        }
      }
    }
  }
`;
