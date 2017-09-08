import React, {PropTypes} from 'react';
import {PieChart} from 'react-d3';
const KpiPieChart = ({data, title}) => (<PieChart
  data={data}
  width={400}
  height={400}
  radius={100}
  innerRadius={20}
  sectorBorderColor="white"
  title={title}/>);

KpiPieChart.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};
export default KpiPieChart;
