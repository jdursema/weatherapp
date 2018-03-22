import { fetchForecast } from '../Helpers/forecasthelper';
import Forecast from '../Containers/Forecast/Forecast';

export const getForecast = () => async (dispatch) => {
  const forecastData = await fetchForecast();

  dispatch(addForecastToStore(forecastData))
}

export const addForecastToStore = (forecastObject) => ({
  type: "ADD_FORECAST",
  forecastObject
})