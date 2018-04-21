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

client.on('message' , (message) => {
  if (!message.content.startsWith('!sardine')) return;
  if (message.content === "!sardine") {
    message.guild.roles.get('437275140863164417').members.map((member) => {
      message.channel.send(`The current sardine is **${member.user.username}**`
        + '. You can tag it using \`@sardine\` in your message.');
    });
  }
});

client.login(env.token);
