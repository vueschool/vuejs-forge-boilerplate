import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { useAuthUserStore } from "@/stores/AuthUserStore";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_APP_WORKSPACE_ENDPOINT,
});

// Authorization Link
const setAuthorizationLink = setContext((request, previousContext) => {
  const store = useAuthUserStore();
  return store.authenticated
    ? {
        ...previousContext,
        headers: {
          authorization: `Bearer ${store.idToken}`,
        },
      }
    : previousContext;
});

// Cache implementation
const cache = new InMemoryCache();

// Error handling
const setErrorHandler = onError((error) => {
  const badToken = !!error.response?.errors?.find(
    // @ts-expect-error it does have a code prop so not sure why type doesn't
    (e) => e.code === "TokenExpiredError" || e.code === "InvalidTokenError"
  );
  if (badToken) {
    const store = useAuthUserStore();
    store.login();
  }
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: setAuthorizationLink.concat(setErrorHandler).concat(httpLink),
  cache,
});

export default apolloClient;
