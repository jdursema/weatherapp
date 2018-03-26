import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';



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
            <Card>
              <CardHeader
                title={forecast.day}/>
              <CardTitle
                title={forecast.dayCond}
                subtitle={forecast.dayLow+'|'+forecast.dayHigh}/>
            </Card>
          )
        })
      }

    return (
      <div>
        {mappedCards}
      </div>     
    )
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, null) (TenDay);