import React from 'react';
import { shallow } from 'enzyme';
import KpiBarChart from './KpiBarChart';

describe('<KpiBarChart />', () => {
  it('should render', () => {
    const wrapper = shallow(<KpiBarChart/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have an element called \'barChart\'', () => {
    const wrapper = shallow(<KpiBarChart />);
    const actual = wrapper.find('BarChart').exists();
    const expected = true;
    expect(actual).toEqual(expected);
  });

});
