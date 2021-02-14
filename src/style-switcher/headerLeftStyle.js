import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {selectedHeaderStyle} from '../actions/headerStyleAction.js';

class HeaderLeftStyle extends Component {
  constructor(props) {
    super(props);
    this.colorOptions = this.colorOptions.bind(this);
  }

  colorOptions() {
    const style = {
      fontSize: '14px',
    }
    return this.props.colorValues.map((color, index) => {
      const headerStyle = {
        background:  'linear-gradient(to right,' +  color.color + ')',
        BackgroundClip: 'text',
        TextFillColor: 'transparent'
      }
      return (
        <RadioButton
          key={index}
          value={color.color}
          style={style}
          onClick={() => this.props.selectedHeaderStyle(color)}

          uncheckedIcon={<i className="material-icons" style={headerStyle}>lens</i>}
          checkedIcon={<i className="material-icons" style={headerStyle}>radio_button_checked</i>}
        />
      );
    });
  }

  render() {

    return (
      <div>
        <h6>Header left style</h6>
        <div className="header-left">
          <RadioButtonGroup name="shipSpeed" defaultSelected="#258df2" className="radio-group">
            {this.colorOptions()}
          </RadioButtonGroup>
        </div>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    colorValues: state.headerStyle,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectedHeaderStyle: selectedHeaderStyle}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderLeftStyle);
