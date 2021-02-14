import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Panel from '../panel.js';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    //background: 'linear-gradient(45deg, #f54a70, #cb55e3 )',
    borderRadius: 3,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '600',
    outline: 'none',

    padding: '0 30px',
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <Panel
      title="Outlined Buttons"
    >
      <div className="button-demo">
        <Button variant="outlined" className={classes.button}>
          Default
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="outlined" disabled className={classes.button}>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="outlined-button-file"
          multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button variant="outlined" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </div>
    </Panel>
  );
}


export default withStyles(styles)(OutlinedButtons);
