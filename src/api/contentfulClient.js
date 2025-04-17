import { createClient } from "contentful";

const client = createClient({
  space: "ju6p682e753w",
  environment: "master", // defaults to 'master' if not set
  accessToken: "QdLr-xzO8YP51izXvJF2HDOVEFyLtsn48FC5ibnJ5P8",
});

// client
//   .getEntry("645GG2ZDMQ8U3VvLUWbhMe")
//   .then((entry) => console.log(entry))
//   .catch(console.error);
export default client;
