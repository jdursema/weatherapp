import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import SevenHour from '../../Containers/SevenHour/SevenHour';
import TenDay from '../../Containers/TenDay/TenDay';

const Forecast = (props) => {
  console.log(props)
  return (
    <Tabs>
      <Tab label="Seven Day">
        <SevenHour sevenHour={props.SevenHour}></SevenHour>
      </Tab>
      <Tab label="Eleven Hour">
        <TenDay tenDay={props.TenDay}></TenDay>
      </Tab>
    </Tabs>
  )
}

export default Forecast;