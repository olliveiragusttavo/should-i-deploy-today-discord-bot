const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const PREFIX = '!';
const COMMAND = 'deploy';

const DISCORD_TOKEN = 'token';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Add a listener to the client to send a log whatever the client is ready
client.once('ready', () => {
  console.log(`${new Date().toISOString()} - cliente.ready: Discord connected!`);
});

function message(data) {
  // Add a listener to the client when they send a message and check if the message is a command
  client.on('message', async (message) => {
    if (message.content.startsWith(`${PREFIX}${COMMAND}`)) {
      // Send the response to the channel
      message.channel.send(`${data.shouldideploy ? '👍' : '👎'} ${data.message}`);
    }
  });
}

client.login(DISCORD_TOKEN);

module.exports = message;
