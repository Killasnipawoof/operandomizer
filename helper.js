exports.run = (client, message, args, isAtk) => {
  operators = []

  ctulist = isAtk ? client.attackers : client.defenders;

  // no CTUs specified, load all CTUs
  if (args.length === 0) {
    for (ctu in ctulist) {
      ctuOps = ctulist[ctu];
      for(i = 0; i < ctuOps.length; i++) {
        operators.push(ctuOps[i]);
      }
    }
  }

  // load specified CTUs
  else {
    for (i = 0; i < args.length; i++) {
      ctu = args[i].toLowerCase();

      // handle the 'default' CTU
      if (ctu === "default") {
        let defaultCTUs = [ "other", "sas", "fbi", "gign", "spetsnaz", "gsg9" ];
        for (j = 0; j < defaultCTUs.length; j++) {
          ctu = defaultCTUs[j];
          ctuOps = ctulist[ctu];
          for (k = 0; k < ctuOps.length; k++) {
            operators.push(ctuOps[k]);
          }
        }
      }
      // handle other CTUs
      else {
        ctuOps = ctulist[ctu];
        for (j = 0; j < ctuOps.length; j++) {
          operators.push(ctuOps[j]);
        }
      }
    }
  }

  // randomly select an operator from the list
  selection = Math.floor(Math.random() * operators.length);
  console.log("Selected " + operators[selection] + " from " + operators.length + " operators.");
  message.channel.send(client.config.selection + " " + operators[selection]);
}
