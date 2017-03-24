import React from 'react';
import { shallow } from 'enzyme';
import Indicator from './index';

it('<Indicator /> renders without crashing', () => {
  shallow(<Indicator voice={{ status: 'Idle' }} />);
});