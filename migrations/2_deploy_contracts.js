var Tokyo721Token = artifacts.require("Tokyo721Token");

module.exports = async (deployer, network) => {
  await deployer.deploy(Tokyo721Token, "Tokyo721Token", "TKO");
  console.log('Tokyo721Token.address was deployed');
  console.log(Tokyo721Token.address);
};