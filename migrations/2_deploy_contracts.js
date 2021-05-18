const CryptoScripture = artifacts.require("CryptoScripture");
const NomadNft = artifacts.require("NomadNft");

module.exports = function(deployer) {
  deployer.deploy(CryptoScripture);
  deployer.deploy(NomadNft);
};
