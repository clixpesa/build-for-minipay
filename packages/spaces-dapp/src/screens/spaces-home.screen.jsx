import { Box, Icon, FlatList } from 'native-base';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';

import { SectionHeader, FeatureCard, SpacesFeatureItem } from '../components';
import { spaces as spacesData } from '../utils/data';

export default function SpacesHomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);
  const [spaces, setSpaces] = useState([]);


  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

    return (
    <Box flex={1} bg="muted.300"  alignItems="center" justifyContent="center">
      <FlatList
        //width="95%"
        maxW="lg"
        minW="sm"
        mx = {2}
        data={spaces}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListHeaderComponent={
          <Box>
            <FeatureCard
              color="warmGray.800"
              bg="white"
              balance={totalBalance.toFixed(4).toString()}
              apprxBalance={(totalBalance * 120.75).toFixed(2).toString()}
              actions={[
                {
                  icon: <Icon as={Feather} name="plus" size="md" color="primary.600" mr="1" />,
                  name: 'New Space',
                  screen: 'createSpace',
                },
                {
                  icon: (
                    <Icon as={Feather} name="arrow-right" size="md" color="primary.600" mr="1" />
                  ),
                  name: 'Fund',
                  screen: 'sendFunds',
                },
                {
                  icon: <Icon as={Feather} name="more-horizontal" size="lg" color="primary.600" />,
                  screen: 'dummyScreen',
                },
              ]}
              itemBottom={false}
            />
            {spaces.length > 0 ? (
              <SectionHeader
                title="Spaces"
                actionText="See all"
                action={() => console.log('See all')}
              />
            ) : null}
          </Box>
        }
        renderItem={({ item, index }) => (
          <Box
            bg="white"
            opacity={85}
            roundedTop={index === 0 ? '2xl' : 'md'}
            roundedBottom={index === spaces.length - 1 ? '2xl' : 'md'}
            mt={1}
            key={item.id}
          >
            <SpacesFeatureItem
              //key={item.id}
              itemTitle={item.name}
              dueDate={item.dueDate}
              type={item.type}
              value={(item.value * 1).toFixed(2).toString() + ' cUSD'}
              screen="RoscaHome"
              itemParams={{ roscaAddress: item.address }}
            />
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}