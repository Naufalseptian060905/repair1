const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")  
  .setAuthor("Alinnffziah")
  .setFooter("Alinnffziah", client.user.displayAvatarURL())
  .addField("━━━━━━[ Command 🛠 ]━━━━━━",`|help=untuk melihat command|
|ping=untuk melihat ping|
|avatar=untuk melihat avatar/profile|
|snipe=untuk melihat pesan yang dihapus (comming soon)|`)
  .addField("━━━━━━[ Auto Respon ]━━━━━━",`|Welcome/welcome|,|Welkam/welkam,|
|Makasih/makasih|,|Yeuu/yeuu|,|Hadeh/hadeh|`)
  
  message.channel.send(embed);
  
  }