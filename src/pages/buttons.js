import React from 'react';
import FlatButtons from '../components/buttons/flatButtons';
import OutlinedButtons from '../components/buttons/outlinedButton';
import FlatIconButtons from '../components/buttons/flatIconButtons';
import RaisedButtons from '../components/buttons/raisedButtons';
import RaisedIconButtons from '../components/buttons/raisedIconButtons';
import FloatingActionButtons from '../components/buttons/floatingActionButtons';
import IconTooltipButtons from '../components/buttons/iconTooltipButtons';

const Buttons = () => {
  return (
    <div className="button-page">
      <div className="row justify-content-start">
        <div className="col-md-6">
          <FlatButtons />
          <OutlinedButtons />
          <RaisedButtons />
        </div>
        <div className="col-md-6">
          <FloatingActionButtons />
          <FlatIconButtons />
          <RaisedIconButtons />
          <IconTooltipButtons />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
