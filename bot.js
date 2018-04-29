const Discord = require('discord.js');

Client = {
  fs: require('fs'),
  config: require('./config.json'),
  attackers: require('./operators/attackers.json'),
  defenders: require('./operators/defenders.json'),
  bot: new Discord.Client()
}

Client.bot.on("ready", () => {
  Client.bot.user.setPresence({
    game: {
      name: "say " + Client.config.prefix + "help",
      type: 0
    }
  });
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

  console.log("\nReceived command: " + command + " " + args);

  // simple command handler
  try {
    let commandFile = require('./commands/' + command + '.js');
    commandFile.run(Client, message, args);
  } catch (err) {
    console.error(err);
    message.channel.send("Encountered an error executing '" + Client.config.prefix + command + "'.");
  }
});

Client.bot.login(Client.config.token);
