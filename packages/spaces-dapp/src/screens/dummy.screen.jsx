import { Box, Text, HStack, Button } from 'native-base';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { blockscoutKey, stableToken } from '../config/appconfig';
import { getBalance, createSpace } from '../interactions';

export default function DummyScreen() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState('Not Connected');
  let provider = null;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else {
    console.error('MiniPay provider not detected');
  }

  /*
  const connect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(accounts);
    setAddress(account);
  };*/

  useEffect(() => {
    const connectToWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(accounts);
        setAddress(account);
      }
    };
    connectToWallet();
  }, []);

  const setSigner = async () => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    console.log(address);
    console.log(blockscoutKey);
  };

  const showBalance = async () => {
    const balance = await getBalance(address);
    setBalance(balance);
  };

  const createDummyRosca = async () => {
    let txData = {
      token: stableToken,
      roscaName: 'Masomo',
      imageLink: 'https://ipfs',
      authCode: '1234',
      goalAmount: ethers.utils.parseUnits('10', 18).toString(),
      ctbAmount: ethers.utils.parseUnits('1', 18).toString(),
      ctbDay: 'Monday',
      ctbOccur: 'Weekly',
      disbDay: 'Monday',
      disbOccur: 'Weekly',
    };
    const result = await createSpace(txData);
    console.log(result);
  };

  return (
    <Box flex={1} bg="muted.50" alignItems="center" justifyContent="center">
      <Text>{address}</Text>
      <Text>Bal: {balance} cUSD</Text>
      <HStack space={2}>
        <Button onPress={() => connect()}>Connect</Button>
        <Button onPress={() => showBalance()}>Show Bal</Button>
        <Button onPress={() => createDummyRosca()}>Contract Call</Button>
      </HStack>
    </Box>
  );
}
