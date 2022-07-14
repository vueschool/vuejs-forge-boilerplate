import { defineStore } from "pinia";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useBoardsStore = defineStore("boards", {
  state: () => {
    return {
      boards: [],
    };
  },
  actions: {
    getBoards() {
      const { result, loading, error, onResult } = useQuery(gql`
        query {
          boardsList {
            items {
              id
              title
              image {
                shareUrl
              }
            }
          }
        }
      `);
      onResult(() => {console.log(result.value.boardsList.items)})
    },
  },
});
