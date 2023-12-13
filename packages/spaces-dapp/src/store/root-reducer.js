import { combineReducers } from '@reduxjs/toolkit';

import spaceReducer from './spaces/spaces.slice';

export const rootReducer = combineReducers({
  spaces: spaceReducer,
});
