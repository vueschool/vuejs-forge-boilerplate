import { defineStore } from "pinia";

export type RootState = {
  count: number;
};

export const useStore = defineStore("main", {
  state: () =>
    ({
      count: 0,
    } as RootState),
  actions: {},
});
