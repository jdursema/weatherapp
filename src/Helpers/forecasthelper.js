import key from '../Helpers/key';

export const fetchForecast = async() => {
  const initialFetch = await fetch(`https://api.wunderground.com/api/${key}
  /conditions/hourly/forecast10day/q/
  CO/denver.json`)
  const fetchResponse = await initialFetch.json()
  const cleanResponse = await cleanData(fetchResponse)
  return cleanResponse
}


const cleanData = (data) => {
  const currentWeather = {
    city: data.current_observation.display_location.full,
    avgTemp: data.current_observation.temp_f,
    img: data.current_observation.icon,
    currentCond: data.current_observation.weather,
    dateWeekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
    dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
    dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
    highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  };


  const sevenHour = data.hourly_forecast.slice(0, 7)
  .reduce((sevenArray, hour) => {
    sevenArray.push({
      time: hour.FCTTIME.civil, 
      temp: hour.temp.english, 
      cond: hour.condition, 
      img: hour.icon});
    return sevenArray;
  }, []);


  const tenDay = data.forecast.simpleforecast.forecastday.
  reduce((tenDayArray, day) => {
    tenDayArray.push(
      {dayHigh: day.high.fahrenheit, 
      dayLow: day.low.fahrenheit, 
      day: day.date.weekday,
      dayCond: day.conditions,
      dayImg: day.icon});
    return tenDayArray;
  }, []);

  return {currentWeather, sevenHour, tenDay};
}