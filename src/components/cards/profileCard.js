import React from 'react';
import Button from '@material-ui/core/Button';

const ProfileCard = (props) => {
  const style = {
    background: 'linear-gradient(45deg, #f54a70, #cb55e3 )',
    borderRadius: 3,
    border: 0,
    color: 'white',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '600',
    outline: 'none',

    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
    textTransform: 'none',
    width: '100%'
  };

  return (
    <div className="profile-card">
      <div className="info">
        <h5>{props.name}</h5>
        <p>{props.userRole}</p>
      </div>
      <div className="profile-image" style={{background: 'url(' + props.avatar + ')'}}></div>
      <div className="profile-footer">
        <div>
          <h6>{props.followers}</h6>
          <p>Followers</p>
        </div>
        <div>
          <h6>{props.followings}</h6>
          <p>Following</p>
        </div>
      </div>

      <Button style={style}>Follow</Button>
    </div>
  )
}

export default ProfileCard;
