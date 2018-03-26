import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import './TenDay.css'



class TenDay extends Component {
  constructor () {
    super ();
    this.state = {
      tenDay: []
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({tenDay: nextProps.forecast.tenDay})
  }


  
  render() {

    let mappedCards

      if(this.state.tenDay[0]){
        mappedCards = this.state.tenDay.map((forecast, index) => {
          return (
            <Card
              style= {{width: '25%', margin: '5px'}}>
              <CardHeader
                title={forecast.day}/>
              <CardTitle
                title={forecast.dayCond}
                subtitle={forecast.dayLow+'|'+forecast.dayHigh}
                subtitleStyle= {{fontSize:'18px'}}
                />
            </Card>
          )
        })
      }

    return (
      <div className='ten-day'>
        {mappedCards}
      </div>     
    )
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, null) (TenDay);