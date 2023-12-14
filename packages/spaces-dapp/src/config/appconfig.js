import { CSAPI_KEY } from 'app-env';

module.exports = {
  blockscoutApiUrl: 'https://api-alfajores.celoscan.io/api',
  blockscoutUrl: 'https://alfajores.celoscan.io',
  blockscoutKey: CSAPI_KEY,
  stableToken: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  linkingConfig: {
    screens: {
      spaceHome: 'home',
      spacesLanding: 'get-started',
      createSpace: 'create',
      joinSpace: 'join',
      selectContacts: 'select-contacts',
      setSpaceGoal: 'set-goal',
      fundSpace: 'fund',
      manageSpace: 'manage',
      dummyScreen: 'dummy',
      pot: 'current-pot',
      loans: 'loans',
      activity: 'activity',
    },
  },
};
