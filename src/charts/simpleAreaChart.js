/**
 * Filename: simpleAreaChart.js
 * SimpleAreaChart
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class SimpleAreaChart extends Component {

  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          height={200} data={this.props.areaChartData}
          margin={{top: 10, right: 0, left: 0, bottom: 0}}
        >
          { this.props.axis ?
          <XAxis dataKey="name" axisLine={false}/> : ''
          }

          { this.props.axis ?
          <YAxis axisLine={false}/> : ''
          }



          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='earns' stroke={this.props.stroke} fill={this.props.fill}  />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

// Connect store data as props to componeent
function mapStateToProps (state) {
  return {
    areaChartData: state.areaChartData
  }
}

export default connect(mapStateToProps)(SimpleAreaChart);
