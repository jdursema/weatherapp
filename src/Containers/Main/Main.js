import React, {Component} from 'react';
import CurrentWeather from '../../Components/CurrentWeather/CurrentWeather';
import Forecast from '../../Components/Forecast/Forecast';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class Main extends Component {
  constructor () {
    super();
    this.state = {
      open: true
    };
  }

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    let displayMain;

    if (this.props.error){
      displayMain = <Dialog
        title={this.props.error}
        modal={false}
        open= {this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
      > 
        <FlatButton 
          label="Cancel"
          onClick = {this.handleClose}
        />
      </Dialog>;
    } else {
      displayMain =
        <div>
          <CurrentWeather CurrentWeather = {this.props.forecast.currentWeather}/>
          <Forecast SevenHour = {this.props.forecast.sevenHour}
            TenDay = {this.props.forecast.tenDay}/>
        </div>;
    }
    return (
      <div>
        {displayMain}
      </div>
    );
  }
};


const mapStateToProps = state => ({
  forecast: state.forecast,
  error: state.error
});

export default connect(mapStateToProps, null)(Main);

Main.propTypes = {
  forecast: PropTypes.object,
  error: PropTypes.string
};

