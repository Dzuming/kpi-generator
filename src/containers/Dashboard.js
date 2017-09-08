import React, {Component} from 'react';
import KpiBarChart from '../components/Charts/KpiBarChart';
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
    return (<KpiBarChart
      data={barData}
      title="Bar Chart"
      yAxisLabel="Label"
      xAxisLabel="Value"/>);
  }
}

export default Dashboard;
