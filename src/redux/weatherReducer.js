export const ADD_WEATHER = "ADD_WEATHER";
export const CHANGE_NAME = "CHANGE_NAME";
const initialState = {
  weatherDate: {},
  cityName: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEATHER:
      return { ...state, weatherDate: action.value };

    case CHANGE_NAME:
      console.log(action.value);
      return { ...state, cityName: action.value };

    default:
      return state;
  }
};

export default weatherReducer;
