import React, {Component} from 'react';
import {BarChart} from 'react-d3';
class Dashboard extends Component {
  state = {};
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let barData = [
      {
        "name": "Series A",
        "values": [
          {
            "x": '23-03-2017',
            "y": 33
          },
          {
            "x": 2,
            "y": 33
          },
        ]
      }, {
        "name": "Series B",
        "values": [
          {
            "x": '23-03-2017',
            "y": 44
          },
          {
            "x": 2,
            "y": 44
          }
        ]
      }
    ];
    return (<BarChart
      data={barData}
      width={500}
      height={200}
      fill={'#9AC361'}
      title="Bar Chart"
      yAxisLabel="Label"
      xAxisLabel="Value"/>);
  }
}

export default Dashboard;
