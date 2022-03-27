const http = require("http");
const axios = require('axios');
const Discord = require('discord.js');

const client = new Discord.Client();

const ROUTE = 'http://shouldideploy.today/api?tz=America/Sao_Paulo';

// Send a request to the server to get the response of "show I deploy today?"
function getRequest(callback) {
  axios.get(ROUTE).then((response) => {
    if (response.data) {
      callback(response.data);
    } else {
      log('No data found');
    }
  }).catch((error) => {
    log(error);
  });
}

module.exports = http.createServer((request, response) => {
  getRequest((data) => {
    // Send the response to Discord chanel
    require('./client').send(data, client);
    // Send the response to the client
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ data }));
  });
});
