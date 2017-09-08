import React from 'react';
import { shallow } from 'enzyme';
import KpiBarChart from './KpiBarChart';

describe('<Dashboard />', () => {
  it('should have a header called \'Dashboard\'', () => {
    const wrapper = shallow(<KpiBarChart />);
    const actual = wrapper.find('h1').text();
    const expected = 'Dashboard';
    expect(actual).toEqual(expected);
  });
  it('should have an element called \'barChart\'', () => {
    const wrapper = shallow(<KpiBarChart />);
    const actual = wrapper.find('BarChart').exists();
    const expected = true;
    expect(actual).toEqual(expected);
  });

});