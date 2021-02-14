import React from 'react';
import {PieChart, Pie, ResponsiveContainer, Cell} from 'recharts';

const data01 = [{name: 'Group A', value: 200}, {name: 'Group B', value: 200},
  {name: 'Group C', value: 300}, {name: 'Group D', value: 300}]

const data02 = [
  {name: 'A1', value: 100},
  {name: 'A2', value: 300},
  {name: 'B1', value: 100},
  {name: 'B2', value: 80},
  {name: 'B3', value: 40},
  {name: 'B4', value: 30},
  {name: 'B5', value: 50},
  {name: 'C1', value: 100},
  {name: 'C2', value: 200},
  {name: 'D1', value: 150},
  {name: 'D2', value: 50}

];


const data03 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

export const SimplePieChart = () => (
  <ResponsiveContainer>
    <PieChart width={800} height={400}>
      <Pie data={data01} dataKey="value" cx={200} cy={100} outerRadius={60} fill="#8884d8"/>
      <Pie data={data02} dataKey="value" cx={200} cy={100} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
    </PieChart>
  </ResponsiveContainer>
);

export const StraightAnglePieChart = () => (
  <ResponsiveContainer>
    <PieChart width={800} height={400}>
      <Pie startAngle={180} dataKey="value" endAngle={0} data={data03} cx={200} cy={200} outerRadius={80} fill="#258df2" label/>
    </PieChart>
  </ResponsiveContainer>
);

const COLORS = [ 'rgba(255,255,255, .9)', 'rgba(255,255,255, .1)', 'rgba(255,255,255, .1)',  'rgba(255,255,255, .1)' ];

export const SinglePieChart = () => (
  <ResponsiveContainer>
    <PieChart width={200} height={200}>
      <Pie dataKey="value" stroke="none"  data={data01}  cx={105} cy={100} outerRadius={80} fill="#258df2">
        {
        data01.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

const COLORS2 = [ '#f54a70', '#cb55e3', '#fdba2c',  '#1dc5e9' ];



export const SinglePieChartAlter = () => (
  <ResponsiveContainer>
    <PieChart width={200} height={200}>
      <Pie dataKey="value" stroke="none"  data={data01}  cx={105} cy={100} outerRadius={80} fill="#258df2">
        {
        data01.map((entry, index) => <Cell key={index} fill={COLORS2[index % COLORS2.length]}/>)
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

