const auth = require('./auth.json')
const config = require('./config.json')

const fs = require('fs')
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Operandomizer is ready.");
});

bot.on("message", (message) => {
  // ignore messages sent by bots
  if (message.author.bot) return;
  // ignore messages not starting with the command prefix
  if (!message.content.startsWith(config.prefix)) return;

  // split the message into the command and arguments
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  console.log("Received command: " + command);

  // simple command handler
  try {
    let commandFile = require('./commands/' + command + '.js');
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
    message.channel.send("'" + config.prefix + command + "' is not a recognized command.");
  }
});

bot.login(auth.token);
