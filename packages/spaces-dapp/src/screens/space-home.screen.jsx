import {
  Box,
  Icon,
  FlatList,
  HStack,
  VStack,
  Text,
  Actionsheet,
  useDisclose,
  Avatar,
  Button,
} from 'native-base';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';

import { FeatureCard, SpacesFeatureItem } from '../components';
import { SpaceTabsNavigator } from '../navigation/spaces-tabs.nav';
import { spaces as spaceData } from '../utils/data';

export default function SpaceHomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);
  const [loans, setLoans] = useState([]);
  const [txs, setTxs] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [spaces, setSpaces] = useState(spaceData.slice(0, 2));

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <Box flex={1} bg="muted.100" alignItems="center">
      <Box width="full">
        <FeatureCard
          color="warmGray.800"
          bg="white"
          actions={[
            { name: 'Fund', icon: <Icon as={Feather} name="plus" size="md" />, screen: 'Save' },
            {
              name: 'Details',
              icon: <Icon as={Feather} name="list" size="md" />,
              screen: 'Withdraw',
            },
            { name: 'Manage', icon: <Icon as={Feather} name="edit" size="md" />, screen: 'Send' },
          ]}
          onOpen={onOpen}
          itemBottom={false}
          balance={totalBalance.toFixed(4).toString()}
          apprxBalance={(totalBalance * 120.75).toFixed(2).toString()}
          space={{ name: 'TMK Wanaume', address: '0x12345....67890' }}
        />
        <SpaceTabsNavigator />
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item
              alignItems="center"
              onPress={() => {
                onClose();
              }}
            >
              <VStack alignItems="center">
                <Avatar mb={2} size="lg" bg="primary.600">
                  TW
                </Avatar>
                <Text fontWeight="medium" fontSize="md">
                  TMK Wanaume
                </Text>
                <Text>0x12345....67890</Text>
                <Button
                  variant="subtle"
                  rounded="3xl"
                  px="16"
                  mt={2}
                  _text={{ color: 'primary.700', fontWeight: 'semibold', mb: '0.5' }}
                  onPress={() => {
                    onClose();
                    navigation.navigate('manageSpace');
                  }}
                >
                  Manage Space
                </Button>
              </VStack>
            </Actionsheet.Item>
            {spaces.length > 1 ? (
              <Actionsheet.Item
                onPress={() => {
                  onClose();
                }}
              >
                <VStack width="full">
                  <Text fontSize="md">Your other spaces</Text>
                  {spaces.slice(1, 2).map((item, index) => (
                    <SpacesFeatureItem
                      navigation={navigation}
                      key={index}
                      itemTitle={item.name}
                      dueDate={item.dueDate}
                      type={item.type}
                      value={(item.value * 1).toFixed(2).toString() + ' cUSD'}
                      screen="RoscaHome"
                      itemParams={{ roscaAddress: item.address }}
                    />
                  ))}
                </VStack>
              </Actionsheet.Item>
            ) : null}
            <Actionsheet.Item
              onPress={() => {
                onClose();
                navigation.navigate('createSpace');
              }}
            >
              <HStack space={3} alignItems="center">
                <Icon as={Feather} name="plus-circle" size="xl" />
                <Text fontSize="md">Create a Space</Text>
              </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => {
                onClose();
                navigation.navigate('joinSpace');
              }}
            >
              <HStack space={3} alignItems="center" ml={1}>
                <Icon as={Feather} name="user-plus" size="xl" />
                <Text fontSize="md">Join a Space</Text>
              </HStack>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
    </Box>
  );
}
