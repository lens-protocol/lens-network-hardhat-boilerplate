import "@matterlabs/hardhat-zksync";

import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
  },
  zksolc: {
    version: "1.5.12",
    settings: {
      codegen: "yul",
    },
  },
  networks: {
    lensTestnet: {
      chainId: 37111,
      ethNetwork: "sepolia", // or a Sepolia RPC endpoint from Infura/Alchemy/Chainstack etc.
      url: "https://api.staging.lens.zksync.dev",
      verifyURL:
        "https://api-explorer-verify.staging.lens.zksync.dev/contract_verification",
      zksync: true,
    },
    hardhat: {
      zksync: true,
      loggingEnabled: true,
    },
  },
};

export default config;
