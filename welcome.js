const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = function (client) {

  client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(ch => ch.id === config.welcome)
    welcomeChannel.send(`**HALLO WESQUAD BARU** ${member}`)
})
  
    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
    client.on("guildMemberAdd", async member => {
      const canvas = Canvas.createCanvas(700, 400);
      const ctx = canvas.getContext('2d');
    
      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('./weeboom.jpg');
      // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'weeboom.jpg');

      const welcomeembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription(`**WELCOME TO WEBOOM** <:emoji_54:788255457931427840> <@${member.id}>
  
<a:goks:785963960909692989> **Jangan lupa ambil role di**
<a:veric:788634303651250197> <#783587809373978644>
  
<a:goks:785963960909692989> **Jangan lupa baca rules di**
<a:veric:788634303651250197> <#783595990392242177>
  
<a:goks:785963960909692989> **Jangan sungkan nimbrung di**
<a:veric:788634303651250197> <#783578689135706133>
  
**"STAY WITH WEEBOOM FAMILY"** <a:metal:785963705400950856>`)
      .setImage("attachment://weeboom.jpg")
      .setFooter("Welcome", client.user.displayAvatarURL())
      .attachFiles(attachment);
    //define the welcome channel
    const channel = member.guild.channels.cache.find(ch => ch.id === config.welcome);
    //send the welcome embed to there
    channel.send(welcomeembed);
    })
  
}
