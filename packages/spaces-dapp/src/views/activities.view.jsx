import { Box, Text, HStack, VStack, Spacer, Progress } from 'native-base';
import { useState } from 'react';
import { SectionHeader, TransactionItem } from '../components';

import { transactions } from '../utils/data';

export default function ActivitiesView() {
  const [txs, setTxs] = useState(transactions); // [
  return (
    <Box flex={1} alignItems="center" mt={3}>
      {txs.map((tx, index) => (
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
      ))}
    </Box>
  );
}
