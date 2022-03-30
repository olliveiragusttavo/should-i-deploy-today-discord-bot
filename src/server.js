const http = require("http");
const axios = require('axios');
const client = require('./client');

const ROUTE = 'http://shouldideploy.today/api?tz=America/Sao_Paulo';

// Send a request to the server to get the response of "show I deploy today?"
async function getData(callback) {
  const response = await axios.get(ROUTE);

  if (response.status === 200) {
    callback(response.data);
  }
}

// Send response to the discord
getData(client);

module.exports = http.createServer(async (request, response) => {
  // Send the response to the client
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("Server is running");
});
