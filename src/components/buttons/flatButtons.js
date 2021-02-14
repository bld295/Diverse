import React from 'react';
import Button from '@material-ui/core/Button';

import Panel from '../panel.js';

const FlatButtons = (props) => {
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
      title="Flat Buttons"
    >
      <div className="button-demo">
        <Button style={style} color="primary" variant="flat">Primary</Button>
        <Button style={style} color="secondary" variant="flat">Secondary</Button>
        <Button style={style} disabled variant="flat">Disables</Button>
        <Button style={style} color="secondary" fullWidth={true}  variant="flat">Full width</Button>
      </div>
    </Panel>
  );
}

export default FlatButtons;
