import { call, put, takeEvery, all } from 'redux-saga/effects';

import assert from 'assert';

import { fetchWeather } from './saga';

import { fetchForecast } from './Helpers/forecasthelper';

describe('Weather Saga', () => {
  const action = {city: "Denver, CO", type: "FETCH_WEATHER"};
  const generator = fetchWeather(action);

  it('should return the forecast call', () => {
    assert.deepEqual(generator.next().value,
      call(fetchForecast, action.city));
  });
  it('should return the a success action', () => {
    assert.deepEqual(generator.next().value, put({type: 'FETCH_WEATHER_DONE', weatherData: undefined }));
  });
  it('should be finished', () => {
    assert.equal(generator.next().done, true);
  })
})