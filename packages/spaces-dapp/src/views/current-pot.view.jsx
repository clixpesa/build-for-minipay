import {
  Box,
  Text,
  HStack,
  VStack,
  Spacer,
  Progress,
  Button,
  Icon,
  Actionsheet,
  useDisclose,
  Input,
  Stack,
} from 'native-base';
import { useState } from 'react';
import { SectionHeader, TransactionItem, SuccessModal } from '../components';
import { Octicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { shortenAddress } from '../utils';

import { transactions } from '../utils/data';
import { fundSpace } from '../interactions/rosca.interactions';

export default function CurrentPotView() {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclose();
  const [txs, setTxs] = useState([]); // [
  const thisAddress = '0x'; //useSelector((s) => s.wallet.walletInfo.address);
  const thisSpace = useSelector((s) => s.spaces.roscaDetails);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [balance, setBalance] = useState(0);

  const currentPot = {
    goalAmount: thisSpace.goalAmount,
    potBal: thisSpace.roscaBal,
    activeMembers: thisSpace.activeMembers + 1,
    progress: (thisSpace.roscaBal / thisSpace.goalAmount) * 100,
    dueDate: thisSpace.dueDate,
    currMember: thisSpace.creator ? shortenAddress(thisSpace.creator, true) : 'Member',
    mycontributions: 0,
  };

  const handleFundSpace = async () => {
    setIsLoading(true);
    const res = await fundSpace(thisSpace.address, amount);
    console.log(res);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      setIsSuccess(true);
      onOpen1();
    }, 2000);
  };

  return (
    <Box flex={1} alignItems="center">
      <Box width="85%" my={3}>
        <Text fontWeight="medium" fontSize="md">
          Current Round: {thisSpace.currentRound}
        </Text>
        <Spacer />
        <Text fontWeight="medium" fontSize="md" color="muted.600">
          Due for: Abedi ({currentPot.currMember})
        </Text>
      </Box>
      <Box bg="white" rounded="xl" width="95%" py={3}>
        <VStack space={2}>
          <HStack mx="5" my="2">
            <Text fontWeight="semibold" fontSize="md">
              Saved: {currentPot.progress.toFixed(1)}%
            </Text>
            <Spacer />
            <Text _light={{ color: 'muted.500' }} fontWeight="medium" pt={1} fontSize="md">
              {currentPot.potBal} / {currentPot.goalAmount}
            </Text>
          </HStack>
          <Progress colorScheme="primary" value={currentPot.progress} mx="4" bg="primary.100" />
          <HStack mx="5" my="2">
            <Text fontWeight="medium" color="muted.500" fontSize="md">
              Due: {currentPot.dueDate}
            </Text>
            <Spacer />
            <Text _light={{ color: 'muted.500' }} fontWeight="medium" fontSize="md">
              2/5 Contributions
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box width="85%" my={1}></Box>
      <SectionHeader
        title="My Contributions"
        action={() => console.log('See all contributions')}
        actionText={currentPot.mycontributions + '/' + currentPot.goalAmount + 'cUSD'}
      />
      {txs.length === 0 ? (
        <Box width="85%" alignItems="center" mt={6}>
          <Icon as={Octicons} name="note" size="4xl" />
          <Text fontSize="lg" mt={2} fontWeight="medium">
            No Contributions yet
          </Text>
          <Text textAlign="center" fontSize="md">
            Your contributions to the pot will show here.
          </Text>
        </Box>
      ) : (
        txs.map((tx, index) => (
          <Box
            bg="white"
            opacity={85}
            roundedTop={index === 0 ? '2xl' : 'md'}
            roundedBottom={index === txs.length - 1 ? '2xl' : 'md'}
            mt={1}
            width="95%"
            key={index}
          >
            <TransactionItem
              key={index}
              trTitle={tx.title}
              trDate={tx.date}
              spAmount={tx.amount + ' cUSD'}
              eqAmount={tx.amount + ' KES'}
              credited={tx.credited}
              screen={tx.screen}
            />
          </Box>
        ))
      )}
      <SuccessModal
        isOpen={isOpen1}
        onClose={onClose1}
        message={
          isSuccess
            ? `Pot funded successfully! \nAmount: ${amount}`
            : `Pot funding Failed! \n${errorMessage}`
        }
        screen="spaceHome"
        scrnOptions={{ isSuccess }}
      />
      <Button
        bg="primary.600"
        colorScheme="primary"
        width="75%"
        rounded="3xl"
        my={8}
        _text={{ fontWeight: 'semibold', mb: '0.5' }}
        onPress={() => {
          onOpen();
        }}
      >
        Contribute
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item>
            <Text fontSize="md" mb={2}>
              Set an amount you wish to pay
            </Text>
            <Text fontSize="md">Pay a max of: {(0 * 1).toFixed(4)} cUSD</Text>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack space="xl">
              <Text fontSize="lg" py={3} fontWeight="semibold">
                cUSD
              </Text>
              <Input
                py={2}
                textAlign="right"
                minW="2/3"
                maxW="75%"
                placeholder="0.00"
                size="lg"
                keyboardType="numeric"
                isFocused={true}
                autoFocus={true}
                InputRightElement={
                  <Text fontSize="md" fontWeight="medium" pr={3}>
                    cUSD
                  </Text>
                }
                value={amount}
                onChangeText={(amount) => setAmount(amount)}
              />
            </HStack>
            <Text my={3}>Account Balance: {(balance * 1.0).toFixed(2)} cUSD</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            alignItems="center"
            justifyContent="center"
            bg="primary.600"
            rounded="3xl"
            width="75%"
            height={10}
            _text={{ color: 'white', fontWeight: 'semibold', mb: '0.5' }}
            onPress={() => {
              handleFundSpace();
              onClose();
            }}
          >
            Fund Pot
          </Actionsheet.Item>
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
