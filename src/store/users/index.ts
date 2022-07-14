import { defineStore } from "pinia";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [],
      isFetchingUsers: false
    };
  },
  actions: {
    getUsers() {
      const { result, loading, error, onResult } = useQuery(gql`
      query {
        usersList{
          items{
            email
            comments{
              items{
                id
                text
                tasks{
                  id
                  description
                  user{
                    email
                  }
                }
              }
            }
          }
        }
      }
      `);
      onResult(() => {
          this.users = result.value.usersList.items
          console.log("Alfonso pijalarga ",result.value.usersList.items)
          console.log("this.users", this.users)
    })
    },
  },
});
