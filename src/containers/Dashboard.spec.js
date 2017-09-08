import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './Dashboard';
describe('<Dashboard />', () => {
  it('should have  h1 element with text', () => {
    const wrapper = shallow(<Dashboard/>);
    const actual = wrapper
      .find('h1')
      .text();
    const expected = 'Dashboard';
    expect(actual).toEqual(expected);
  });
  it('should have KpiBarChart element', () => {
    const wrapper = shallow(<Dashboard/>);
    const actual = wrapper
      .find('KpiBarChart')
      .exists();
    const expected = true;
    expect(actual).toEqual(expected);
  });
  it('should have KpiPieChart element', () => {
    const wrapper = shallow(<Dashboard/>);
    const actual = wrapper
      .find('KpiPieChart')
      .exists();
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
