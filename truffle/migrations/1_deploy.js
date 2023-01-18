var UserContract = artifacts.require("UserContracts");

module.exports = function(deployer) {
    deployer.deploy(UserContract);
}