import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherApi } from "../../api";
import { ADD_WEATHER, CHANGE_NAME } from "../../redux/weatherReducer";

export const Weather = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.weatherReducer);

  console.log(state.weatherDate);

  const findWeather = () => {
    weatherApi
      .getWeather(state.cityName)
      .then((data) => dispatch({ type: ADD_WEATHER, value: data }));
  };

  const changeCity = (value) => {
    dispatch({ type: CHANGE_NAME, value });
  };
  return (
    <div>
      <input
        onChange={(e) => changeCity(e.target.value)}
        placeholder="Введите город"
        value={state.cityName}
      />
      <button onClick={() => findWeather()}>Find Weather</button>
      <div> {state.weatherDate.name && state.weatherDate.name}</div>
      <div>{state.weatherDate.main && state.weatherDate.main.feels_like}</div>
      <div>{state.weatherDate.main && state.weatherDate.main.temp}</div>
    </div>
  );
};
