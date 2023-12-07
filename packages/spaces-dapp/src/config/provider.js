import { providers } from 'ethers';

let provider = undefined
let signer = undefined

export function isProviderSet() {
  return !!provider;
}

export function setProvider() {
  if (window.ethereum) { //&& window.ethereum.isMiniPay
    provider = new providers.Web3Provider(window.ethereum);
  } else {
    console.error("Provider failed to initialize");
  }
}

export function getProvider() {
  if (!provider) {
    console.error('Attempting to use provider before initialized');
  }
  return provider;
}

export function clearProvider() {
  provider = undefined;
}

export function isSignerSet() {
  return !!signer;
}

export function setSigner() {
  if (!provider) {
    console.error('Attempting to set signer before provider initialized');
  }
  if (signer) {
    console.log('Signer is being overridden');
  }
  signer = provider.getSigner();
}

export function getSigner() {
  if (!provider || !signer) {
    console.error('Attempting to use signer before initialized');
  }
  return signer;
}

export function clearSigner() {
  signer = undefined;
}