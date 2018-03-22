import { combineReducers } from "redux";
import forecastReducer from './forecast-reducer';

const rootReducer = combineReducers({
  forecast: forecastReducer
});

export default rootReducer;