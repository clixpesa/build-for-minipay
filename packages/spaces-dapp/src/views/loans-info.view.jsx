import { Box, Text, HStack, VStack, Spacer, Progress, Icon, Button } from 'native-base';
import { Octicons } from '@expo/vector-icons';

export default function LoansInfoView() {
  return (
    <Box flex={1} alignItems="center">
      <Box width="65%" alignItems="center" mt={16}>
        <Icon as={Octicons} name="note" size="4xl" />
        <Text fontSize="lg" mt={2} fontWeight="medium">
          No Loans yet
        </Text>
        <Text textAlign="center" fontSize="md">
          Loans requested and offered in the Group will show here.
        </Text>
      </Box>
      <Button
        bg="primary.600"
        colorScheme="primary"
        width="75%"
        rounded="3xl"
        my={8}
        _text={{ fontWeight: 'semibold', mb: '0.5' }}
        onPress={() => console.log('Request a Loan')}
      >
        Request a Loan
      </Button>
    </Box>
  );
}
