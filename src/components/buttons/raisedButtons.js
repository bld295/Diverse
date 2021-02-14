import React from 'react';
import Button from '@material-ui/core/Button';

import Panel from '../panel.js';

const RaisedButtons = (props) => {
  const style = {
    //background: 'linear-gradient(45deg, #f54a70, #cb55e3 )',
    borderRadius: 3,
    border: 0,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '600',
    outline: 'none',
    padding: '0 30px',
    textTransform: 'none',
  };

  return (
    <Panel
      title="Raised Buttons"
    >
      <div className="button-demo">
        <Button style={style} color="primary" variant="raised">Primary</Button>
        <Button style={style} color="secondary" variant="raised">Secondary</Button>
        <Button style={style}  disabled  variant="raised">Disabled</Button>
        <Button style={style} color="secondary" fullWidth={true}  variant="raised">Full width</Button>
      </div>
    </Panel>
  );
}

export default RaisedButtons;
