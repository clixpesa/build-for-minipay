import { ethers } from 'ethers';
import { getProvider } from '../config/provider';
import { stableToken } from '../config/appconfig';

export const getBalance = async (address) => {
  const provider = getProvider();
  const contractABI = ['function balanceOf(address account) external view returns (uint256)'];
  const contract = new ethers.Contract(stableToken, contractABI, provider);
  const balance = await contract.balanceOf(address);
  return ethers.utils.formatEther(balance);
};
