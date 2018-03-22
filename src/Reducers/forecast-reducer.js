const forecastReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_FORECAST':
    return action.forecastObject
  default:
    return state;
  }
};

export default forecastReducer;