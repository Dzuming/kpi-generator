import React, {Component} from 'react';
import KpiBarChart from '../components/Charts/KpiBarChart';
import KpiPieChart from '../components/Charts/KpiPieChart';
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
    let pieData = [
      {label: 'Margarita', value: 20.0},
      {label: 'John', value: 55.0},
      {label: 'Tim', value: 25.0 }
    ];
    return (
      <div>
    <KpiBarChart
      data={barData}
      title="Bar Chart"
      yAxisLabel="Label"
      xAxisLabel="Value"/>
      <KpiPieChart data={pieData} title="Pie Chart"/>
      </div>
      );
  }
}

export default Dashboard;
