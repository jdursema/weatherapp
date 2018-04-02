import React from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../../Components/Forecast/Forecast';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';

const Main = (props) => {
  let displayMain
  if(props.error){
    displayMain = <Dialog
    title={props.error}
    modal={false}
    open= {true}
    // onRequestClose={this.handleClose}
    autoScrollBodyContent={true}
  > 
  </Dialog>
  } else {
    displayMain =
      <div>
        <CurrentWeather CurrentWeather = {props.forecast.currentWeather}/>
        <Forecast SevenHour = {props.forecast.sevenHour}
                  TenDay = {props.forecast.tenDay}/>
      </div>
  }

  return (
    <div>
      {displayMain}
    </div>
  )
}


const mapStateToProps = state => ({
  forecast: state.forecast,
  error: state.error
})

export default connect(mapStateToProps, null) (Main);

