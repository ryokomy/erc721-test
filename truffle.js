var HDWalletProvider = require("truffle-hdwallet-provider");
var local_config = require("./local/config.js");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5777
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(local_config.mnemonic, "https://ropsten.infura.io/" + local_config.infura_access_token);
      },
      network_id: 3,
      gas: 6000000,
      gasPrice: 5000000000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
