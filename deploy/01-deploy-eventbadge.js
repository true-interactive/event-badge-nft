const BADGE_FEE = ethers.utils.parseEther("0.1");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const args = [BADGE_FEE, new Date("June 6, 2022 11:00:00").getTime(), new Date("June 6, 2022 13:00:00").getTime()];

    const eventBadge = await deploy("EventBadge", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 6,
    });
}  