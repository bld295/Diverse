import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      isRead: false,
    };
    this.showNotification = this.showNotification.bind(this);
    this.checkRead = this.checkRead.bind(this);
    // For hide dropdown when click outside of the component
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.checkRead();
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

  showAllNotifications() {
    return  this.props.notifications.map((notification) => {
      let imageUrl = notification.avatar;
      const style = {
        background: 'url('+ imageUrl + ')'
      }

      const notificationType = classNames ({
        'success' : notification.success,
        'avatar': true,
        'avatar-icon': true,
        'warning': notification.warning,
        'danger': notification.danger,
        'unread': !notification.read
      });

      const avatarType = classNames ({
        'avatar': true,
        'avatar-icon': true,
        'unread': !notification.read
      });

      return (
        <div key={notification.id} className="notification-single">

          { notification.avatar !== ''
          ? <div className={avatarType} style={style}></div>
          : <div className={avatarType}><i className="fa fa-user"></i></div>
          }

          { notification.icon ? <div className={notificationType}><i className={notification.icon}></i></div> : ''}

          <p className="details">
            { notification.name ? <a href="">{notification.name}</a> : ''}
            <span>{notification.detail}</span>
          </p>
          <p className="time">{notification.time}</p>
        </div>
      );
    });
  }

  showNotification() {
    this.setState({toggle: !this.state.toggle});
  }

  checkRead() {
    return this.props.notifications.find(notification => {
      if (notification.read === false) {
        return this.setState({ isRead: true});
      }
      return false;
    })
  }

  render() {
    const toggleNotification = classNames ({
      'slide-content': true,
      'toggle' : this.state.toggle,
    });

    const isNotificationRead = classNames ({
      'notification-trigger': true,
      'an-circle-icon-btn': true,
      notification: true,
      'has-unread': this.state.isRead,
    });

    return (
      <div className="notification-wrapper" ref={this.setWrapperRef}>
        <button className={isNotificationRead} onClick={this.showNotification}>
          <i className="fa fa-bell-o"></i>
        </button>
        <div className={toggleNotification}>
          <h3 className="inner-title">Notifications</h3>
          <div className="notifications">
            {this.showAllNotifications()}
          </div>
          <a className="view-all" href="">View all</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

export default  connect(mapStateToProps)(Notification);
