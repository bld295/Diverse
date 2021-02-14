import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';

import avatarImage from '../img/user2.jpg';

export default class AvatarDropdown extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.showProfile = this.showProfile.bind(this);
    // For hide dropdown when click outside of the component
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({toggle: false});
    }
  }

  showProfile() {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    const toggleProfile = classNames ({
      'slide-content': true,
      'profile': true,
      'toggle' : this.state.toggle,
    });

    return (
      <div ref={this.setWrapperRef}>
        <div className="notification-wrapper">
          <button onClick={this.showProfile}>
            <Avatar
              src={avatarImage}
              size={35}
            />
          </button>
          <div className={toggleProfile}>
            <h3 className="inner-title">Profile</h3>
            <div className="profile-links">
              <a href="/"><i className="material-icons account">account_circle</i> View profile</a>
              <a href="/"><i className="material-icons mail">mail_outline</i> Inbox</a>
              <a href="/"><i className="material-icons calendar">date_range</i> Calendar</a>
              <a href="/"><i className="material-icons setting">settings</i> Settings</a>
              <a href="/"><i className="material-icons sign-out">power_settings_new</i> Sign out</a>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
