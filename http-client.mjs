import https from "https";

const endpoint = "https://eocciojp3z7nib1.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "tama",
  lastName: "rama",
});

request.write(body);
request.end();
