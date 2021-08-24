if (process.env["INSTANCE"] === "DEVELOPMENT") {
  import("dotenv").then((dotenv) => {
    dotenv.config();
  });
}

export function getEnvVars() {
  return {
    GITHUB_CLIENT_ID: process.env["GITHUB_CLIENT_ID"],
    GITHUB_CLIENT_SECRET: process.env["GITHUB_CLIENT_SECRET"],
  };
}
