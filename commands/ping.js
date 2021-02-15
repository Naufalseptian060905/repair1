const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
  try {
    const m = await msg.channel.send("Ping...");
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("⏳ Latensi", `__**${m.createdTimestamp - msg.createdTimestamp}ms**__`)
      .addField('💓 Latensi API ', `__**${Math.round(client.ws.ping)}ms**__`)
     .setTimestamp()
    return m.edit(`🏓 P${"o".repeat(Math.floor(client.ping) % 5 === 0 ? 0 : Math.floor(Math.random() * 5))}ng..`, { embed: embed });
  } catch (e) {
    return msg.channel.send(`Oh no an error occured :( ${e.message} try again later`);
  }
};