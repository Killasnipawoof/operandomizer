exports.run = (client, message, args, isAtk) => {
  operators = [];
  blacklisted_ctus = [];
  blacklisted_ops = [];

  // select the appropriate CTU list
  ctulist = isAtk ? client.attackers : client.defenders;

  // determine if a given argument is a CTU or not
  isCTU = function(arg) {
    keys = Object.keys(ctulist);
    for (i = 0; i < keys.length; i++) {
      if (keys[i] === arg) {
        return true;
      }
    }
    return false;
  };

  // no arguments given, load all CTUs
  if (args.length === 0) {
    for (ctu in ctulist) {
      ctuOps = ctulist[ctu];
      for(i = 0; i < ctuOps.length; i++) {
        operators.push(ctuOps[i]);
      }
    }
  }

  // process the arguments
  else {
    console.log(args); // TODO this doesn't see the last element when args.length >= 3
    for (i = 0; i < args.length; i++) {
      arg = args[i].toLowerCase();
      console.log(arg);

      // add blacklist args to blacklist
      if (arg.startsWith("-")) {
        stripped = arg.substring(1); // strip leading '-'
        if (isCTU(stripped)) {
          blacklisted_ctus.push(stripped);
        }
        else {
          // capitalize the first letter of stripped
          blacklisted_ops.push(stripped.charAt(0).toUpperCase() + stripped.slice(1));
        }
      }

      // add ctus to the list
      else {
        ctu = arg;
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
  }

  // get list of blacklisted ops from blacklisted CTUs
  for (i = 0; i < blacklisted_ctus.length; i++) {
    ctuOps = ctulist[blacklisted_ctus[i]];
    for (j = 0; j < ctuOps.length; j++) {
      blacklisted_ops.push(ctuOps[j]);
    }
  }

  console.log(blacklisted_ctus);
  console.log(blacklisted_ops);
  console.log(operators);
  // remove blacklisted operators from the operator list
  for (i = 0; i < blacklisted_ops.length; i++) {
    index = operators.indexOf(blacklisted_ops[i]);
    if (index > -1) {
      operators.splice(index, 1); // remove the operator
    }
  }
  console.log(operators);

  // randomly select an operator from the list
  selection = Math.floor(Math.random() * operators.length);
  console.log("Selected " + operators[selection] + " from " + operators.length + " operators.");
  message.channel.send(client.config.selection + " " + operators[selection]);
}
