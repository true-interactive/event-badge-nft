const BADGE_FEE = ethers.utils.parseEther("0.1");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const args = [BADGE_FEE];

    const eventBadge = await deploy("EventBadge", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmation: 6,
    });
    
    module.exports.tag ['EventBadge'];
}  