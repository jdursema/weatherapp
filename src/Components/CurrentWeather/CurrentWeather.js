import React from 'react';
import './CurrentWeather.css';
import PropTypes from 'prop-types';

const CurrentWeather = (props) =>  {
  if (props.CurrentWeather){
    return (
      <div>
        <div className = "current">
          <div className = "date-city">
            <div className = "city">
              <p> {props.CurrentWeather.city} </p>
            </div>
            <div className = "current-temp">
              <h1> {props.CurrentWeather.avgTemp}&deg;</h1>
    
            </div>
            <div className = "date">
              <p> {props.CurrentWeather.dateWeekDay}, {props.CurrentWeather.dateMonth} {props.CurrentWeather.dateDay} </p> 
              
            </div>
          </div>
          <div className = "current-cond">
            <p>{props.CurrentWeather.currentCond}</p>
          </div>
          <div className = "high-low">
            <p> High: {props.CurrentWeather.highTemp}&deg;|
                 Low: {props.CurrentWeather.lowTemp}&deg;</p>
          </div>
    
          <div className = "summary">
            <p> {props.CurrentWeather.summary} </p>
          </div>   
        </div>
      </div>     
    );
  } else {
    return (
      <div>
      </div>
    );
  }
  
};



export default CurrentWeather;

CurrentWeather.propTypes = {
  CurrentWeather: PropTypes.object
};