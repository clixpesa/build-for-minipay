import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

//const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
