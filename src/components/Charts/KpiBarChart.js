import React, {PropTypes} from 'react';
import {BarChart} from 'react-d3';

const KpiBarChart = ({data, title, yAxisLabel, xAxisLabel}) => (
    <div>
        <h1>Dashboard</h1>
        <BarChart
            width={500}
            height={200}
            fill={'#9AC361'}
            data={data}
            title={title}
            yAxisLabel={yAxisLabel}
            xAxisLabel={xAxisLabel}/>
    </div>
);
KpiBarChart.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    yAxisLabel: PropTypes.string.isRequired,
    xAxisLabel: PropTypes.string.isRequired
};
export default KpiBarChart;