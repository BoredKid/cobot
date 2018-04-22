exports.handle = (client, message) => {
  const { content } = message;
  const prefix = '!';
  if (!content.startsWith(prefix)) return;

  // ping-pong block
  if (content.endsWith('ing')) {
    const response = `${content.substring(1, content.length - 3)}ong`;
    message.channel.send(response);
  }

  // sardine block
  if (content.startsWith(`${prefix}sardine`)) {
    const role = message.guild.roles.get('437275140863164417');

    // get current sardine
    if (content === `${prefix}sardine`) {
      role.members.forEach((member) => {
        message.channel.send(`The current sardine is **${member.user.username}**. You can tag it using \`@sardine\` in your message.`);
      });
    }

    // make someone sardine
    if (content.split(' ').length === 3 && content.startsWith(`${prefix}sardine make `)) {
      const mentioned = message.mentions.members.first();

      role.members.forEach((member) => {
        member.removeRole(role).then(() => {
          mentioned.addRole(role);
        });
      });

      message.channel.send(`**${mentioned.user.username}** is now the new sardine !`);
    }
  }
};
