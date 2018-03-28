const errorReducer = (state = '', action) => {
  switch (action.type) {
  case 'FETCH_FAILED':
    return 'Sorry, the city you entered doesn\'t seem to match anything in our files. Please try a different city'
  case 'FETCH_WEATHER_DONE':
    return ''
  default:
    return state;
  }
};

export default errorReducer;