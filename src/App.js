import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CurrentWeather from './Containers/CurrentWeather/CurrentWeather';
import Forecast from './Containers/Forecast/Forecast';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar label="Default" />
        <CurrentWeather/>
        <Forecast/>
      </MuiThemeProvider> 
    );
  }
}

export default App;
