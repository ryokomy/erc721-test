var Kyuzan721Token = artifacts.require("Kyuzan721Token");

module.exports = async (deployer, network) => {
  await deployer.deploy(Kyuzan721Token, "Kyuzan721Token", "KZN");
  console.log('Kyuzan721Token.address was deployed');
  console.log(Kyuzan721Token.address);
};