import { ICoordinates } from '@/lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async ({ lat, lng }: ICoordinates, { rejectWithValue }) => {
    try {
      const { data } = await axios('/current.json', {
        params: { key: apiKey, q: `${lat},${lng}` },
      });

      const history = await axios('/history.json', {
        params: { key: apiKey, q: `${lat},${lng}`, dt: new Date() },
      });
      console.log(history.data.forecast.forecastday[0]);

      return { ...data, forecast: history.data.forecast.forecastday[0] };
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
