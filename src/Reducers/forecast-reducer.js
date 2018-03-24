const forecastReducer = (state = {}, action) => {
  switch (action.type) {
  case 'FETCH_WEATHER_DONE':
    return action.weatherData
  default:
    return state;
  }
};

export default forecastReducer;