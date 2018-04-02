import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import SevenHour from '../SevenHour/SevenHour';
import TenDay from '../TenDay/TenDay';
import PropTypes from 'prop-types';


const Forecast = (props) => {
  return (
    <Tabs>
      <Tab label="Seven Day">
        <SevenHour SevenHour={props.SevenHour}></SevenHour>
      </Tab>
      <Tab label="Eleven Hour">
        <TenDay TenDay={props.TenDay}></TenDay>
      </Tab>
    </Tabs>
  );
};

export default Forecast;

Forecast.propTypes = {
  SevenHour: PropTypes.array,
  TenDay: PropTypes.array
};