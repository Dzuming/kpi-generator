import React from 'react';
import { shallow } from 'enzyme';
import KpiPieChart from './KpiPieChart';

describe('<KpiPieChart />', () => {
  it('should have an element called \'PieChart\'', () => {
    const wrapper = shallow(<KpiPieChart />);
    const actual = wrapper.find('PieChart').exists();
    const expected = true;
    expect(actual).toEqual(expected);
  });

});
