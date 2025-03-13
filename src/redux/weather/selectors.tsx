import { RootState } from '@/lib/api';

export const selectLocation = (state: RootState) => state.weather.location;

export const selectCurrent = (state: RootState) => state.weather.current;

export const selectForecast = (state: RootState) => state.weather.forecast;

export const selectIsInitialData = (state: RootState) =>
  state.weather.isInitialData;
