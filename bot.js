const Discord = require('discord.js');

Client = {
  config: require('./config.json'),
  auth: require('./auth.json'),
  fs: require('fs'),
  bot: new Discord.Client()
}

Client.bot.on("ready", () => {
  console.log("Operandomizer is ready.");
});

Client.bot.on("message", (message) => {
  // ignore messages sent by bots
  if (message.author.bot) return;
  // ignore messages not starting with the command prefix
  if (!message.content.startsWith(Client.config.prefix)) return;

  // split the message into the command and arguments
  const args = message.content.slice(Client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  console.log("Received command: " + command + " " + args);

  // simple command handler
  try {
    let commandFile = require('./commands/' + command + '.js');
    commandFile.run(Client, message, args);
  } catch (err) {
    console.error(err);
    message.channel.send("'" + Client.config.prefix + command + "' is not a recognized command.");
  }
});

Client.bot.login(Client.auth.token);
