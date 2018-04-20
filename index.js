const Discord = require('discord.js');
const env = require('./env');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.content.startsWith('!') && message.content.endsWith('ing')) {
    const response = `${message.content.substring(1, message.content.length - 3)}ong`;
    message.channel.send(response);
  }
});

client.login(env.token);
