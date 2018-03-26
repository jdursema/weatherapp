import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import SevenHour from '../../Containers/SevenHour/SevenHour';
import TenDay from '../../Containers/TenDay/TenDay';

const Forecast = (props) => {
  return (
    <Tabs>
      <Tab label="Seven Day">
        <SevenHour></SevenHour>
      </Tab>
      <Tab label="Eleven Hour">
        <TenDay></TenDay>
      </Tab>
    </Tabs>
  )
}

export default Forecast;