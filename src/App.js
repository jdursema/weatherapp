import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import CurrentWeather from './Containers/CurrentWeather/CurrentWeather';
import Forecast from './Components/Forecast/Forecast';
import cities from './Cities';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import IconButton from 'material-ui/IconButton';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      open: false,
      disabled: true,
      searchInput: '',
      currentCity: 'Denver, CO'
    }
  }

  componentDidMount = () => {
    this.props.handleWeather(this.state.currentCity)
  }
  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  enableButton = (event) => {
    if(this.state.searchInput === ''){
      this.setState({disabled: true})
    } else {
      this.setState({disabled: false})
    }
  }

  changeCity = () => {
    this.setState({currentCity: this.state.searchInput, open: false})
    this.props.handleWeather(this.state.searchInput);
  }

  changeInput = (event) => {
    this.setState({searchInput: event})
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar 
          title="Weather"
          iconElementLeft={<IconButton><MapsPlace /></IconButton>}
          iconElementRight={
            <div className='right-title'>
              <p>{this.state.currentCity}</p>
              <RaisedButton 
                label="Change City"
                onClick = {this.handleOpen}
              />
              <Dialog
                title="Change Your Current City"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
              >

              <AutoComplete
                floatingLabelText="Type in a city"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={cities.data}
                maxSearchResults={5}
                onUpdateInput={this.changeInput}
              />
              <FlatButton 
                label="Cancel"
                onClick = {this.handleClose}
              />
              <FlatButton 
                label="Submit"
                disabled = {false}
                onClick = {this.changeCity}
              />

                
              </Dialog>
            </div>
          }
        />
        <CurrentWeather/>
        <Forecast/>
      </MuiThemeProvider> 
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleWeather: (city) => dispatch({
    type: 'FETCH_WEATHER',
    city
  })
})


export default connect(null, mapDispatchToProps)(App);
