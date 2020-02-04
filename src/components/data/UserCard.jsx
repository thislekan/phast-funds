import React from 'react';
import { Avatar } from 'antd';

const UserCard = (props) => (
  <div className="user-details">
    <div className="user-details__wrapper">
      <div className="user-details__wrapper__title">
        <h3>User Details</h3>
      </div>
      <div className="user-details__wrapper__body">
        <div className="avatar">
          {props.user.profile_picture ? (
            <img src={props.user.profile_picture} alt="avatar" />
          ) : (
            <Avatar className="avatar-icon">
              {props.user.first_name[0] + ' ' + props.user.last_name[0]}
            </Avatar>
          )}
        </div>
        <div className="info-div">
          <p className="data data--name">
            {props.user.first_name + ' ' + props.user.last_name}
          </p>
          <p className="data data--email">{props.user.email}</p>
          <p className="data data--phone">{props.user.phone_number}</p>
          <p className="data data--address">{props.user.address}</p>
        </div>
      </div>
      <div className="user-details__wrapper__footer">
        <button onClick={props.toggleDetailsModal}>View More</button>
      </div>
    </div>
  </div>
);

export default UserCard;
