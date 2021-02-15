const Discord = require('discord.js');

module.exports = {
    name: "snipe",

    async run (client, message, args) {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) {
            return message.channel.send('disini tidak ada pesan dihapus!')
        }
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        .setColor("RANDOM")
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)

        message.channel.send(embed)
    }
}