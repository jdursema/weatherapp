import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import './SevenHour.css';
import PropTypes from 'prop-types';


const SevenHour = (props) => {

  let mappedCards;

  if (props.SevenHour){
    mappedCards = props.SevenHour.map((forecast, index) => {
      return (
        <Card
          key={`sevenCard-${index}`}
          style= {{width: '25%', margin: '5px'}} >
          <CardHeader
            title={forecast.time}/>
          <CardTitle
            title={forecast.cond}
            subtitle={forecast.temp}
            subtitleStyle= {{fontSize:'18px'}}/>
        </Card>
      );
    });
  }

  return (
    <div className= 'seven-hour'>
      {mappedCards}
    </div>     
  );
};


export default SevenHour;

SevenHour.propTypes = {
  SevenHour: PropTypes.array
};

