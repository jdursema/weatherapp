import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchForecast } from './Helpers/forecasthelper';

export function* fetchWeather(action){
  try{
    const weatherData = yield call(fetchForecast, action.city);
    yield put({ type: 'FETCH_WEATHER_DONE', weatherData });
  }
  catch (error) {
    yield put({ type: 'FETCH_FAILED' });
  }
}

export function* watchFetchWeather(){
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}



export default function* rootSaga() {
  yield all([
    watchFetchWeather()
  ])
}