import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WeatherDataInterface {
    Location: string
}

export const getWeatherData = async ({ lat, lng }: Coordinates) => {
  try {
    const { data } = await axios('/current.json', {
      params: { key: apiKey, q: `${lat},${lng}` },
    });
    return data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new Error()
  }
};
