import { getEnvVars } from "$lib/envVars";

const envVars = getEnvVars();

export async function get(request) {
  const callbackCode = request.query.get("code");
  const accessToken = await getAccessToken(callbackCode);
  const user = await getUser(accessToken);
  return {
    body: JSON.stringify(user, null, 2),
  };
}

function getAccessToken(callbackCode) {
  return fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: envVars.GITHUB_CLIENT_ID,
      client_secret: envVars.GITHUB_CLIENT_SECRET,
      code: callbackCode,
    }),
  })
    .then((r) => r.json())
    .then((r) => r.access_token);
}

function getUser(token) {
  return fetch("https://api.github.com/user", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());
}
