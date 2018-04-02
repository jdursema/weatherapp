import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import './SevenHour.css'

const SevenHour = (props) => {

    let mappedCards

      if(props.sevenHour){
        mappedCards = props.sevenHour.map((forecast, index) => {
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


export default SevenHour

