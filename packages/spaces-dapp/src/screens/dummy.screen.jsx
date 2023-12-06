import { Box, Text, HStack, Button} from 'native-base';
import { ethers } from 'ethers';
import { useState } from 'react';

export default function DummyScreen() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState('Not Connected');
  let provider = null;
  if (window.ethereum ) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
    console.error("MiniPay provider not detected");
    
}


  const connect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setAddress(account);
  };

  const showBalance = async () => {
    const contractAddress = '0x765DE816845861e75A25fCA122bb6898B8B1282a'//'0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1';
    const contractABI = [
      'function balanceOf(address account) external view returns (uint256)'
    ];
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const balance = await contract.balanceOf(address);
    setBalance(ethers.utils.formatEther(balance))
  }
  
  return (
    <Box flex={1} bg="muted.50" alignItems="center" justifyContent="center">
      <Text>{address}</Text>
      <Text>Bal: {balance} cUSD</Text>
      <HStack space={2}>
        <Button onPress={() => connect()}>Connect</Button>
        <Button onPress={() => showBalance()}>Show Bal</Button> 
      </HStack>
    </Box>
  );
}
