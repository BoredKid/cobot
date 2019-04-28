const Discord = require('discord.js');

const env = require('./env');
const Message = require('./message');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.member.user.id === client.user.id) return;
  Message.handle(client, message);
});

client.login(env.token);
