import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from './operations';

const initialState = {
  location: null,
  current: null,
  forecast: null,
  isInitialData: true,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.fulfilled, (state, { payload }) => {
      state.current = payload.current;
      state.location = payload.location;
      state.isInitialData = false;
      state.forecast = payload.forecast;
    });
  },
  reducers: {},
});

// export const { setCoordinates } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
