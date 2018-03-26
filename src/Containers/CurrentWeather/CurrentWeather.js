import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrentWeather.css';


class CurrentWeather extends Component {
  constructor () {
    super ();
    this.state = {
      currentWeather: {}
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({currentWeather: nextProps.forecast.currentWeather})
  }
  
  render() {
    return (
      <div>
      <div className = "current">
        <div className = "date-city">
          <div className = "city">
            <p> {this.state.currentWeather.city} </p>
          </div>
          <div className = "current-temp">
            <h1> {this.state.currentWeather.avgTemp}&deg;</h1>

          </div>
          <div className = "date">
            <p> {this.state.currentWeather.dateWeekDay}, {this.state.currentWeather.dateMonth} {this.state.currentWeather.dateDay} </p> 
          
          </div>
        </div>
          <div className = "current-cond">
            <p>{this.state.currentWeather.currentCond}</p>
          </div>
          <div className = "high-low">
            <p> High: {this.state.currentWeather.highTemp}&deg;|
             Low: {this.state.currentWeather.lowTemp}&deg;</p>
          </div>

        <div className = "summary">
          <p> {this.state.currentWeather.summary} </p>
        </div>   
    </div>
  </div>     
    )
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, null) (CurrentWeather);