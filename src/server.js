const http = require("http");
const axios = require('axios');
const client = require('./client');

const ROUTE = 'http://shouldideploy.today/api?tz=America/Sao_Paulo';

// Send a request to the server to get the response of "show I deploy today?"
async function getData() {
  const response = await axios.get(ROUTE);

  if (response.status === 200) {
    return response.data;
  }
}

module.exports = http.createServer(async (request, response) => {
  const data = await getData();

  // Send the response to Discord chanel
  // client(data);
  // Send the response to the client
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ data }));
});
