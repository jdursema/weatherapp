import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CurrentWeather from './Containers/CurrentWeather/CurrentWeather';
import Forecast from './Containers/Forecast/Forecast';
import { getForecast } from './Actions';

class App extends Component {
  componentDidMount() {
    this.props.handleForecast();
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar label="Weather" />
        <CurrentWeather/>
        <Forecast/>
      </MuiThemeProvider> 
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleForecast: () => dispatch(getForecast()),
});

export default connect(null, mapDispatchToProps) (App);
