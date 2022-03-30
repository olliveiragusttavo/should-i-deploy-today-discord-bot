const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const env = require('../env.json');

const PREFIX = '!';
const COMMAND = 'deploy';

function startClient(data) {
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  // Add a listener to the client to send a log whatever the client is ready
  client.once('ready', () => {
    console.log(`${new Date().toISOString()} - cliente.ready: Discord connected!`);
  });

  // Add a listener to the client when they send a message and check if the message is a command
  client.on('message', async (message) => {
    if (message.content.startsWith(`${PREFIX}${COMMAND}`)) {
      // Send the response to the channel
      message.channel.send(`${data.shouldideploy ? '👍' : '👎'} ${data.message}`);
    }
  });

  client.login(env.token);
}

module.exports = startClient;
