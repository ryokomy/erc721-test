var ERC721TestToken = artifacts.require("ERC721TestToken");

module.exports = async (deployer, network) => {
  await deployer.deploy(ERC721TestToken);
  console.log('ERC721TestToken.address was deployed');
  console.log(ERC721TestToken.address);
};