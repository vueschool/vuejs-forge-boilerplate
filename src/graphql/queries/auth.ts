import gql from "graphql-tag";
export const CURRENT_USER_QUERY = gql`
  query getCurrentUser {
    user {
      id
      email
      firstName
      lastName
      team {
        items {
          id
          name
        }
      }
      roles {
        items {
          name
        }
      }
    }
  }
`;

export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
      firstName
      lastName
      team {
        items {
          id
          name
        }
      }
      roles {
        items {
          name
        }
      }
    }
  }
`;
