import { request } from "./request";

const HOST = "https://swapi.dev/api";

// export const getCurrentWeather = ({ city, units = "metric" }) => {
//     const url = `${host}/weather`;
//     const params = new URLSearchParams({
//         q: city,
//         units,
//         appid: TOKEN_WEATHER_APP,
//     }).toString();
//     return request(url, { params });
// };

export const fetchItems = (endpoint, search = "") => {
  const url = `${HOST}/${endpoint}`;
  const result = request(url);
  return result;
};
