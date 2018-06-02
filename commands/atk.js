exports.run = (client, message, args) => {
  helper = require('../helper.js');
  helper.run(client, message, args, true);
}
