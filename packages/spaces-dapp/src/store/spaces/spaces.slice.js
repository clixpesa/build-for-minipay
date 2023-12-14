import { createSlice, createAction } from '@reduxjs/toolkit';

const spacesInitialState = {
  isLoading: true,
  selectedMembers: [],
  spaceInfo: {
    // for space creation
    name: null,
    type: null, //personal, rosca, regular, mchango
    authCode: '112233AABB',
    imgLink: null,
    members: [], //!TODO always include creator.
    membersCount: 0,
    goalAmount: null,
    ctbAmount: null,
    ctbDay: 'Monday',
    ctbOccurence: 'Weekly',
    disbDay: 'Tuesday',
    disbOccurence: 'Weekly',
    creator: null, //creator user address
  },
  roscaDetails: {},
  userSpaces: {
    // just add contract addresses
    hasSpaces: false,
    roscas: [],
    personal: [],
    regular: [],
    mchango: [],
  },
};

const spacesSlice = createSlice({
  name: 'spaces',
  initialState: spacesInitialState,
  reducers: {
    setSelectedMembers: (state, action) => {
      if (action.payload.length > 0) {
        state.selectedMembers = action.payload;
        state.spaceInfo.members = action.payload;
      } else {
        state.spaceInfo.membersCount = action.payload;
      }
    },
    setSpaceInfo: (state, { payload }) => {
      const { spaceName, thisAddress, membersCount } = payload;

      //state.spaceInfo.members = state.selectedMembers;
      state.spaceInfo.name = spaceName;
      //state.spaceInfo.type = spaceType;
      state.spaceInfo.creator = thisAddress;
      //state.spaceInfo.imgLink = defaultImg;
      state.spaceInfo.membersCount = membersCount;
    },
    setCtbSchedule: (state, { payload }) => {
      (state.spaceInfo.ctbDay = payload.day), (state.spaceInfo.ctbOccurence = payload.occurrence);
    },
    setDisbSchedule: (state, { payload }) => {
      (state.spaceInfo.disbDay = payload.day), (state.spaceInfo.disbOccurence = payload.occurrence);
    },
    setGoalAmount: (state, { payload }) => {
      const size = state.spaceInfo.members.length;
      state.spaceInfo.goalAmount = payload;
      state.spaceInfo.ctbAmount = size ? payload / (state.spaceInfo.members.length + 1) : payload;
    },
    setUserSpaces: (state, { payload }) => {
      const roscas = payload.filter((s) => s.type === 'rosca');
      state.userSpaces.roscas = roscas;
      state.userSpaces.hasSpaces = payload;
    },
    setRoscaDetails: (state, { payload }) => {
      state.roscaDetails = payload;
    },
    setHasSpaces: (state, { payload }) => {
      state.userSpaces.hasSpaces = payload;
    },
  },
});

export const {
  setSelectedMembers,
  setSpaceInfo,
  setCtbSchedule,
  setDisbSchedule,
  setGoalAmount,
  setUserSpaces,
  setRoscaDetails,
  setHasSpaces,
} = spacesSlice.actions;

//Created action
export const getRoscaData = createAction('spaces/getRoscaData');
export const getRoscaAddress = createAction('spaces/getRoscaAddress');
export const fetchSpaces = createAction('spaces/fetchSpaces');
export const updateSpaces = createAction('spaces/updateSpaces');

export default spacesSlice.reducer;
