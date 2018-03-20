import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';

const Forecast = (props) => {
  return (
    <Tabs>
      <Tab label="Seven Day">
        <div>hi</div>
      </Tab>
      <Tab label="Eleven Hour">
        <div>bye</div>
      </Tab>
    </Tabs>
  )
}

export default Forecast;