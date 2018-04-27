const auth = require('./auth.json')
const config = require('./config.json')
const fs = require('fs')
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
  // ignore messages that do not start with the command prefix
  // also, ignore messages sent by other bots
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  // split the message into the command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch(command) {
    // change the command prefix
    case "prefix":
      // only allow the owner to execute this command
      if(message.author.id !== config.ownerID) return;
      // get the new prefix from the command
      let newPrefix = message.content.split(' ').slice(1, 2)[0];
      // change the configuration in memory
      config.prefix = newPrefix;
      // save the new configuration
      fs.writeFile('./config.json', JSON.stringify(config), (err) => console.error);
      break;
  }

});

bot.login(auth.token);
