require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:__dirname+'/.env'})
/** @type import('hardhat/config').HardhatUserConfig */

const defaultNetwork = 'alfajores'
const mnemonicPath = "m/44'/52752'/0'/0/" 
const {DEV_MNEMONIC, ACC1, ACC2} = process.env

module.exports = {
  solidity: "0.8.17",
  settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  defaultNetwork,
  paths: {
    sources: './src',
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: DEV_MNEMONIC,
        path: mnemonicPath,
        count: 5,
      },
    },
    localhost: {
      url: 'http://127.0.0.1:7545',
      chainId: 31337,
      accounts: [ACC1, ACC2],
      gasPrice: 2500000000,
      gas: 35000000,
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: [ACC1, ACC2],
      gasPrice: 7500000000,
      gas: 35000000,
      chainId: 44787,
      loggingEnabled: true,
    },
    alfajoresDatahub: {
      url: 'https://celo-alfajores--rpc.datahub.figment.io/apikey/<API KEY>',
      accounts: [ACC1, ACC2],
      chainId: 44787,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
    typechain: {
    outDir: 'types',
    target: 'ethers-v5', //web3-v1
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
};

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})