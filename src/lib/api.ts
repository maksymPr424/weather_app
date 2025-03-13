export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ICondition {
  text: string;
  icon: string;
}

export interface IAstro {
  sunrise: string;
  sunset: string;
}

export interface IDay {
  condition: { text: string };
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  maxtemp_c: number;
  maxwind_kph: number;
}

export interface IHour {
  cloud: number;
  condition: { text: string };
  humidity: number;
  precip_mm: number;
  peressure_mb: number;
  wind_dir: string;
  wind_kph: number;
}

export interface ILocation {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface ICurrent {
  cloud: number;
  condition: ICondition;
  feelslike_c: number;
  humidity: number;
  last_updated: string;
  precip_mm: number;
  peressure_mb: number;
  temp_c: number;
  wind_dir: string;
  wind_kph: number;
}

export interface IForecast {
  astro: IAstro;
  day: IDay;
  hour: IHour[];
}

export interface IWeatherData {
  location: ILocation;
  current: ICurrent;
}

export interface IWeatherState {
  location: ILocation;
  current: ICurrent;
  forecast: IForecast;
  isInitialData: boolean;
}

export interface RootState {
  weather: IWeatherState;
}
