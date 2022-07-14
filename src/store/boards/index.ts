import { defineStore } from "pinia";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useBoardsStore = defineStore("boards", {
  state: () => {
    return {
      boards: [],
      isFetchingBoards: false,
      isErrorBoards: []
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
      this.isFetchingBoards = loading;
      onResult(() => {
        this.boards = result.value.boardsList.items;
        return this.boards
      })
      this.isErrorBoards = error;
    },
  },
});
