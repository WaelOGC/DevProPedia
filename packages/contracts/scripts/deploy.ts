import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const DPPACoin = await ethers.getContractFactory("DPPACoin");
  const dppaCoin = await DPPACoin.deploy();

  await dppaCoin.waitForDeployment();

  console.log("DPPA Coin deployed to:", await dppaCoin.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 