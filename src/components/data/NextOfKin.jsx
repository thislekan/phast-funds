import React from 'react';
import { Icon } from 'antd';

const NextOfKin = ({ user }) => {
  return (
    <div className="next-of-kin-card">
      <div className="top-div">
        <div className="icon">
          <Icon type="team" className="icon" />
        </div>
        <div className="title">
          <h3>Next Of Kin</h3>
        </div>
      </div>
      <div className="details">
        <div className="details__wrapper">
          <p className="label">Name</p>
          <p className="data">{user.next_of_kin_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Phone Number</p>
          <p className="data">{user.next_of_kin_phone_number}</p>
        </div>
      </div>
    </div>
  );
};

export default NextOfKin;
