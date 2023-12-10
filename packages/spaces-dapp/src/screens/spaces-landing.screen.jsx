import { Box, Text, Heading, HStack, Stack,VStack, Icon, Avatar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function SpacesLandingScreen() {
  return (
    <Box flex={1} bg="muted.100" alignItems="center" >
      <Box bg="white" padding={4} width="full">
        <Heading mt="1/3" color="primary.700">Clixpesa Spaces</Heading>
        <Text mt={4} fontSize="md" >Make money moves with your</Text>
        <Text mb={4} fontSize="md" >family and friends...</Text>
        <Box bg="white" padding={4} width="full"></Box>
      </Box>
      <VStack position='absolute' mt="2/3"width="85%" space={2}>
     <Box bg="primary.50" padding={4}  rounded="2xl" shadow="1">
      <HStack space={2} alignItems="center">
        <Avatar bg="primary.200" >
          <Icon as={MaterialIcons} name="groups" size="2xl" color="primary.600"/>
        </Avatar>
          <Stack p={2}>
            <Text fontSize="md" fontWeight="semibold">Create a Space</Text>
            <Text fontSize="md" >Create a new savings circle.</Text>
            <Text fontSize="md" >Add friends or family.</Text>
          </Stack>
        </HStack>
      </Box>
      <Box bg="primary.50" padding={4}  rounded="2xl"  shadow="1">
        <HStack space={2} alignItems="center">
          <Avatar bg="primary.200" >
            <Icon as={MaterialIcons} name="group-add"size="2xl" color="primary.600"/>
          </Avatar>
          <Stack p={2}>
            <Text fontSize="md" fontWeight="semibold">Join a Space</Text>
            <Text fontSize="md" >You'll need an invite to join.</Text>
            <Text fontSize="md" >Save with friends.</Text>
          </Stack>
        </HStack>
      </Box>
      </VStack>
    </Box>
  );
}