var StultzCoin = artifacts.require("./DevCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(DevCoin);
};
