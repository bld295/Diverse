import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonCustom = (props) => {
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
    <Button style={style} color={props.color} variant={props.variant}>{props.btnText}</Button>
  );
}

export default ButtonCustom;
