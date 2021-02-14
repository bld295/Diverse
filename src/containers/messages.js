import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      isRead: false,
    };
    this.showMessages = this.showMessages.bind(this);
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
    return  this.props.messages.map((message) => {
      let imageUrl = message.avatar;
      const style = {
        background: 'url('+ imageUrl + ')'
      }

      const avatarType = classNames ({
        'avatar': true,
        'avatar-icon': true,
        'unread': !message.read
      });

      return (
        <div key={message.id} className="notification-single message">

          { message.avatar !== ''
          ? <div className={avatarType} style={style}></div>
          : <div className={avatarType}><i className="fa fa-user"></i></div>
          }

          <div className="details">
            <div className="name">
              { message.name ? <a href="">{message.name}</a> : ''}
              <p className="time">{message.time}</p>
            </div>
            <span>{message.detail}</span>
          </div>
        </div>
      );
    });
  }

  showMessages() {
    this.setState({toggle: !this.state.toggle});
  }


  checkRead() {
    return this.props.messages.find(message => {
      if (message.read === false) {
        return this.setState({ isRead: true});
      }
      return false;
    })
  }

  render() {
    const toggleMessage = classNames ({
      'slide-content': true,
      'toggle' : this.state.toggle,
    });

    const isMessageRead = classNames ({
      'notification-trigger': true,
      'an-circle-icon-btn': true,
      notification: true,
      'has-unread': this.state.isRead,
    });

    return (
      <div className="notification-wrapper" ref={this.setWrapperRef}>
        <button className={isMessageRead} onClick={this.showMessages}>
          <i className="fa fa-envelope-o"></i>
        </button>
        <div className={toggleMessage}>
          <h3 className="inner-title">Messages</h3>
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
    messages: state.messages
  }
}

export default  connect(mapStateToProps)(Messages);
