const Migrations = artifacts.require("Calibur");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
