import axios from 'axios';

const API_KEY ='bf730b3f43dbdebd6eda487deeb0c558';
const ROOT_URL ='https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url= '${ROOT_URL}&q={city},us';

  return {

    type: FETCH_WEATHER,
    payload: request
  };
}
