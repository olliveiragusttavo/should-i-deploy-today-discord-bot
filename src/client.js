const PREFIX = '!';
const COMMAND = 'deploy';

const DISCORD_TOKEN = '';

function log(message) {
  console.log(`${new Date().toISOString()} - ${message}`);
}

// Add a listener to the client to send a log whatever the client is ready
client.once('ready', () => {
  log('Discord connected!');
});

// Add a listener to the client when they send a message and check if the message is a command
client.on('message', async (message) => {
  if (message.content.startsWith(`${PREFIX}${COMMAND}`)) {
    // Send the response to the channel
    message.channel.send(`${data.shouldideploy ? '👍' : '👎'} ${data.message}`);
  }
});

client.login(DISCORD_TOKEN);
