import { Auth, AUTH_STRATEGIES } from "@8base/auth";

const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;

export const authClient = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_COGNITO,
  },
  {
    domain,
    clientId,
    logoutRedirectUri: `${window.location.origin}/logout`,
    redirectUri: `${window.location.origin}/auth/callback`,
  }
);
