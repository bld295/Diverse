import React from 'react';
import ClassNames from 'classnames';
import { SinglePieChart } from '../charts/simplePieChart';

const DeviceCard = (props) => {
  const cardClass = ClassNames({
    'device-card': true,
    gradient: props.gradient
  })
  return (
    <div className={cardClass}>
      <div className="chart">
        <SinglePieChart />
      </div>
      <div className="content">
        <h4>{props.percentUser}%</h4>
        <p>{props.title}</p>
      </div>

    </div>
  )
}

export default DeviceCard;
