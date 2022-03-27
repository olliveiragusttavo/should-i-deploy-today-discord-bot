const axios = require('axios');
const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '!';
const COMMAND = 'deploy';
const ROUTE = 'http://shouldideploy.today/api?tz=America/Sao_Paulo';
const DISCORD_TOKEN = '';

function log(message) {
  console.log(`${new Date().toISOString()} - ${message}`);
}

// Add a listener to the client to send a log whatever the client is ready
client.once('ready', () => {
  log('Discord connected!');
});

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

// Add a listener to the client when they send a message and check if the message is a command
client.on('message', async (message) => {
  if (message.content.startsWith(`${PREFIX}${COMMAND}`)) {
    try {
      getRequest((response) => {
        // Send the response to the channel
        message.channel.send(`${response.shouldideploy ? '👍' : '👎'} ${response.message}`);
      });
    } catch (err) {
      // send the error to the channel
      message.channel.send(`${err.message}`);
    }
  }
});

client.login(DISCORD_TOKEN);
