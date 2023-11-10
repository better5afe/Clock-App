import { configureStore } from '@reduxjs/toolkit';
import clockReducer from './clock-slice';

export const store = configureStore({
	reducer: clockReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch