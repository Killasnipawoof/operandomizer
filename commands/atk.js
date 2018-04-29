exports.run = (client, message, args) => {
  operators = []

  // no CTUs specified, load all CTUs
  if (args.length === 0) {
    for (ctu in client.attackers) {
      ctuOps = client.attackers[ctu];
      for (i = 0; i < ctuOps.length; i++) {
        operators.push(ctuOps[i]);
      }
    }
  }

  // load specified CTUs
  else {
    for (i = 0; i < args.length; i++) {
      ctu = args[i].toLowerCase();
      console.log(ctu);
      // handle the case of all default CTUs
      if (ctu === "default") {
        let defaultCTUs = [ "other", "sas", "fbi", "gign", "spetsnaz", "gsg9" ];
        for (j = 0; j < defaultCTUs.length; j++) {
          ctu = defaultCTUs[j];
          ctuOps = client.attackers[ctu];
          for (k = 0; k < ctuOps.length; k++) {
            operators.push(ctuOps[k]);
          }
        }
      }
      // handle the case of a specified CTU
      else {
        ctuOps = client.attackers[ctu];
        for (j = 0; j < ctuOps.length; j++) {
          operators.push(ctuOps[j]);
        }
      }
    }
  }

  // randomly select an operator from the list
  selection = Math.floor(Math.random() * operators.length);
  console.log("Selected " + operators[selection] + " from " + operators.length + " operators");
  message.channel.send(client.config.selection + " " + operators[selection]);

  // TODO consider adding yes/no response commands
}
