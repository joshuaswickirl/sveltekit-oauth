import { getEnvVars } from "$lib/envVars";

const envVars = getEnvVars();

export async function get(request) {
  const sessionID = "12345";
  return {
    status: 302,
    headers: {
      location: `https://github.com/login/oauth/authorize?client_id=${envVars.GITHUB_CLIENT_ID}&state=${sessionID}`,
    },
  };
}
