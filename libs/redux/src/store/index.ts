import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counter-slice';
import { apiSlice } from '../features/dogs/dogs-api-slice';
import { gameSlice } from '../features/games/games-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(gameSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
