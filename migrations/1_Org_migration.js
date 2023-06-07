const Organization = artifacts.require("Org");

module.exports = function (deployer) {
    deployer.deploy(
        Organization,
        "ABC Diagonostic",
        "2/3 XYZ Road",
        "abcdiagonostic@gmail.com",
        "9874631599",
        "Diagonostic centre"
    );
};
