import { getEnvVars } from "$lib/envVars";

const envVars = getEnvVars();

export async function get() {
  const authorizeState = Math.random().toString(16).substring(2).toUpperCase();
  // store locally and compare to state returned at /callback
  return {
    status: 302,
    headers: {
      location: `https://github.com/login/oauth/authorize?client_id=${envVars.GITHUB_CLIENT_ID}&state=${authorizeState}`,
    },
  };
}
