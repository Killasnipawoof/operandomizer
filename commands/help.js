exports.run = (client, message, args) => {
  message.channel.send(message.author.username + ": I sent you a DM with some documentation."
    + "\nThe prefix for this guild is `" + client.config.prefix + "`");
  message.author.send("Operandomizer is a Discord bot that randomly selects an "
    + "operator from \"Tom Clancy's Rainbow Six: Siege.\"\nTo select a random "
    + "attacker, say `" + client.config.prefix + "atk`.\nTo select a random defender, "
    + "say `" + client.config.prefix + "def`.\nFor more detailed instructions, visit "
    + "https://github.com/5donuts/operandomizer#operandomizer");
}
