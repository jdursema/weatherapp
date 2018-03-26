import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import './SevenHour.css'

class SevenHour extends Component {
  constructor () {
    super ();
    this.state = {
      sevenHour: []
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({sevenHour: nextProps.forecast.sevenHour})
  }


  
  render() {

    let mappedCards

      if(this.state.sevenHour[0]){
        mappedCards = this.state.sevenHour.map((forecast, index) => {
          return (
            <Card
              style= {{width: '25%', margin: '5px'}} >
              <CardHeader
                title={forecast.time}/>
              <CardTitle
                title={forecast.cond}
                subtitle={forecast.temp}
                subtitleStyle= {{fontSize:'18px'}}/>
            </Card>
          )
        })
      }

    return (
      <div className= 'seven-hour'>
        {mappedCards}
      </div>     
    )
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, null) (SevenHour);

