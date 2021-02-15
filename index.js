const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ytdl = require("ytdl-core");
client.commands = new Discord.Collection();
const config = require('./config.json')
const dotenv = require("dotenv")
const Canvas = require("canvas")

const welcome = require("./welcome");
welcome(client);

client.aliases = new Discord.Collection();
const queue = new Map();
const fs = require('fs')
const ms = require('ms')

const http = require('http');
const express = require('express');
const { measureMemory } = require('vm');
const app = express ()

app.listen(process.env.PORT)

app.get("/", (req, res) => {
  res.sendStatus(200);
});

client.on('messageDelete', (message, channel) => {
  client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      image: message.attachments.first() ? message.attachments.first() : null
  })
})

client.on('message', async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  
    let prefix = (process.env.prefix);
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let sender = message.author;

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`**Prefix Saya : \`${prefix}\`**`);
    }

  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;

    if(!msg.startsWith(prefix)) return;//---------------------

    try {
        let commandFile = require(`./commands/${command}.js`); 
        commandFile.run(client, message, args); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.tag} menggunakan command: ${command} di ${message.guild.name}`);
    }
  

  });

client.on('message', message => {
  
  
  if (message.content === 'Welcome') {
    message.channel.send('<a:sayapkanan:788504710486163457> <a:wel_red:785963831913873419><a:come_red:785963864848072754> <a:sayapkiri:788504916338540605>');
  }
  if (message.content === 'welcome') {
    message.channel.send('<a:sayapkanan:788504710486163457> <a:wel_red:785963831913873419><a:come_red:785963864848072754> <a:sayapkiri:788504916338540605>');
  }
  if (message.content === 'Welkam') {
    message.channel.send('<a:wel_silver:785963769922322473><a:come_silver:785966342918504468>');
  }
  if (message.content === 'welkam') {
    message.channel.send('<a:wel_silver:785963769922322473><a:come_silver:785966342918504468>');
  }
  if (message.content === 'Makasih') {
    message.channel.send('Selalu ada dan sudah ada');
  }
  if (message.content === 'makasih') {
    message.channel.send('Selalu ada dan sudah ada');
  }
  if (message.content === 'Yeuu') {
    message.channel.send('Goblok!');
  }
  if (message.content === 'yeuu') {
    message.channel.send('Goblok!');
  }
  if (message.content === 'Hadeh') {
    message.channel.send('Bre bre');
  }
  if (message.content === 'hadeh') {
    message.channel.send('Bre bre');
  }
});

client.on("voiceStateUpdate", async (oldState, newState) => {

    if(oldState.channel == undefined){
    var role = newState.guild.roles.cache.get("805793543775846440")
    if(newState.channel.id !== "801837739317395526") return
      newState.member.roles.add(role)
    }
    if(newState.channel == undefined){
    var role = oldState.guild.roles.cache.get("805793543775846440")
    if(oldState.channel.id !== "801837739317395526") return
      oldState.member.roles.remove(role)
    }
      
    })

  client.on("ready", async() => {
    
        function randomStatus() {
      let status = [`discord.gg/weboom`,`a.help`] 
      let rstatus = Math.floor(Math.random() * status.length);
   
      
      client.user.setActivity(status[rstatus], {type: "WATCHING" });
    }; setInterval(randomStatus, 5000)
    
    client.user.setStatus('online').then(console.log).catch(console.error);
      console.log(`Logged in as : ${client.user.tag}`);
      console.log(`${client.user.username} is ready!`)
  
  }, 30000)
  

   client.login(process.env.TOKEN);