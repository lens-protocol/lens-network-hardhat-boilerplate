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
    version: "latest",
    settings: {},
  },
  networks: {
    lensTestnet: {
      chainId: 37111,
      url: "https://rpc.staging.lens-network.crtlkey.com",
      ethNetwork:
        "https://eth-sepolia.g.alchemy.com/v2/aIPWSzsW7W7Xqa3vI9FCrosmQs5puLGe", // The Ethereum Web3 RPC URL.
      zksync: true,
      verifyURL:
        "https://api-explorer-verify.staging.lens.zksync.dev/contract_verification",
    },
    hardhat: {
      zksync: true,
      loggingEnabled: true,
    },
  },
};

export default config;
