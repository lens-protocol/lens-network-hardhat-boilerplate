import { deployTransparentProxy, getWallet } from "./utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = getWallet();

  await deployTransparentProxy("Token", [wallet.address], {
    hre,
    wallet,
    verify: true,
  });
}
