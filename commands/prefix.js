exports.run = (client, message, args) => {
  // only allow the owner to execute this command
  if(message.author.id !== client.auth.ownerID) {
    message.channel.send("Only the bot owner may change the command prefix.");
    return;
  }

  // get the new prefix from args
  let newPrefix = args[0];

  // change the configuration in memory
  client.config.prefix = newPrefix;

  // save the new configuration
  client.fs.writeFile('./config.json', JSON.stringify(client.config), (err) => console.error);
  message.channel.send("Command prefix is now: " + client.config.prefix);
}
