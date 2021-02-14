/**
 * filename: iconBoxes.js
 * Home page top samll icon boxex
 */

import React from 'react';
import ClassNames from 'classnames';

export const IconBox = (props) => {
  // Used a style const for changing icon box
  // color using props.
  const progressClass = ClassNames({
    above: props.percent >= 50,
    below: props.percent < 50,
  })


  return (
    <div className="iconbox-single">
      <div className="box-title">
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
      </div>
      <div className="value">
        <h3>
          {props.percent >= 50
          ? <i className="material-icons up">arrow_upward</i>
          : <i className="material-icons down">arrow_downward</i>
          }

          $ {props.earns}
        </h3>
        <span>{props.percent}%</span>
      </div>
      <div className="progress-bar">
        <span className={progressClass} style={{'width': props.percent + '%'}}></span>
      </div>
    </div>
  );
}

const IconBoxes = () => {
  return (
    <div className="iconbox-wrapper">
      <div className="row">
        <div className="col-md-4">
          <IconBox
            title="Daily Sales"
            subtitle="18 Hours"
            earns="983"
            percent="75"
          />
        </div>

        <div className="col-md-4">
          <IconBox
            title="Weekly Sales"
            subtitle="6 Days"
            earns="4,389"
            percent="45"
          />
      </div>

        <div className="col-md-4">
          <IconBox
            title="Monthly Revenues"
            subtitle="24 Days"
            earns="14,389"
            percent="84"
          />

        </div>
      </div>
    </div>
  );
}

export default IconBoxes;
