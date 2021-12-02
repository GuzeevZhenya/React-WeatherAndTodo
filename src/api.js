import * as axios from "axios";


const APIKey = "ea04db02d64d4b2b6453bfc814cd3cf9";

export const weatherApi = {
 
  getWeather(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    ).then(responce=>responce.data)
    ;
  },
};
