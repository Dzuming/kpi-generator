import React, {Component} from 'react';
import * as d3 from "d3v4";
class Dashboard extends Component {
  state = {};
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let jsonCircles = [
      {
        "x_axis": 30,
        "y_axis": 30,
        "radius": 20,
        "color": "green"
      }, {
        "x_axis": 70,
        "y_axis": 70,
        "radius": 20,
        "color": "purple"
      }, {
        "x_axis": 110,
        "y_axis": 100,
        "radius": 20,
        "color": "red"
      }
    ];
    return (
      <svg width={this.props.width} height={this.props.height}>
        {jsonCircles.map((circle, index) => <circle
          key={index}
          cx={circle.x_axis}
          cy={circle.y_axis}
          r={circle.radius}
          fill={circle.color}/>)}

      </svg>
    );
  }
}
Dashboard.defaultProps = {
  width: 300,
  height: 300,
  forceStrength: -10
};

export default Dashboard;
