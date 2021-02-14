import React, {Component} from 'react';
import {connect} from 'react-redux';
import AvatarDropdown from '../components/avatarDropdown';
import Notification from './notification';
import Messages from './messages';


class Header extends Component {

  render () {
    const style = {
      background: this.props.colorHeaderBanner.color
    }

    return (
      <header style={style} className="an-header">
        <div className="header-right">
          <Messages />
          <Notification />
          <AvatarDropdown />
        </div>
      </header>
    );
  }
}

function mapStateToProps (state) {
  return {
    colorHeaderBanner: state.headerBAnnerActiveStyle
  }
}

export default connect(mapStateToProps)(Header);
