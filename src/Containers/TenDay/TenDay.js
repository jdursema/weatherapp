import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import './TenDay.css'



const TenDay = (props) => {
    let mappedCards

      if(props.tenDay){
        mappedCards = props.tenDay.map((forecast, index) => {
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
  };



export default (TenDay);