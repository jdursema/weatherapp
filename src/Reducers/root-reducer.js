import { combineReducers } from "redux";
import forecastReducer from './forecast-reducer';
import errorReducer from './error-reducer';

const rootReducer = combineReducers({
  forecast: forecastReducer,
  error: errorReducer
});

export default rootReducer;