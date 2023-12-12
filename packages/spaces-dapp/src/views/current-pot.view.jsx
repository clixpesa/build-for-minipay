import { Box, Text, HStack, VStack, Spacer, Progress, Button, Icon } from 'native-base';
import { useState } from 'react';
import { SectionHeader, TransactionItem } from '../components';
import { Octicons } from '@expo/vector-icons';

import { transactions } from '../utils/data';

export default function CurrentPotView() {
  const [txs, setTxs] = useState([]); // [
  const rosca = {
    goalAmount: 1000,
    roscaBal: 500,
    activeMembers: 5,
    dueDate: '2021-10-10',
  };
  const prog = (rosca.roscaBal / rosca.goalAmount) * 100;
  return (
    <Box flex={1} alignItems="center">
      <Box width="85%" my={3}>
        <Text fontWeight="medium" fontSize="md">
          Current Round: 2
        </Text>
        <Spacer />
        <Text fontWeight="medium" fontSize="md" color="muted.600">
          Due for: Abedi (0x5363..786)
        </Text>
      </Box>
      <Box bg="white" rounded="xl" width="95%" py={3}>
        <VStack space={2}>
          <HStack mx="5" my="2">
            <Text fontWeight="semibold" fontSize="md">
              Saved: {prog.toFixed(1)}%
            </Text>
            <Spacer />
            <Text _light={{ color: 'muted.500' }} fontWeight="medium" pt={1} fontSize="md">
              {rosca.roscaBal} / {rosca.goalAmount}
            </Text>
          </HStack>
          <Progress colorScheme="primary" value={prog} mx="4" bg="primary.100" />
          <HStack mx="5" my="2">
            <Text fontWeight="medium" color="muted.500" fontSize="md">
              Due: {rosca.dueDate}
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
        actionText="200/500 cUSD"
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
      <Button
        bg="primary.600"
        colorScheme="primary"
        width="75%"
        rounded="3xl"
        my={8}
        _text={{ fontWeight: 'semibold', mb: '0.5' }}
        onPress={() => console.log('Request a Loan')}
      >
        Contribute
      </Button>
    </Box>
  );
}
