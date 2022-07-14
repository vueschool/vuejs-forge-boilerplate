import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from 'pinia'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "https://api.8base.com/cl5jlrt7g0civ09lf2vwk5j3b",
});

const pinia = createPinia()

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router);
app.use(pinia)
app.mount("#app");
