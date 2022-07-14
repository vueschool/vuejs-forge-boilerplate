import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
        isLoading: false,
        isError: false,
        user: {
            name: '',
            userId: '',
            email: ''
        },
        isFetchingUser: false,
        boards: [],
        isFetchingBoards: false
     }
  },
//   actions: {
//     getUser() {
//       this.user,
//       this.isLoading = true
//     },
//   },
})
