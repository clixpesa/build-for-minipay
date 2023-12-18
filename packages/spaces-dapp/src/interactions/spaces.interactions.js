import { ethers } from 'ethers';
import { getSigner } from '../config/provider';
import { spacesContract } from '../config/appconfig';
import spacesAbi from './abis/spaces.abi.json';

export const createSpace = async (space) => {
  const signer = getSigner();
  const contract = new ethers.Contract(spacesContract, spacesAbi, signer);
  const tx = await contract.createRosca(Object.values(space));
  return tx.wait();
};
