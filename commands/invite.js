const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**Interested by the functions of our bot**`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot)`
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};
