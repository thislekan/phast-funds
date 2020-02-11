import React from 'react';
import { Icon } from 'antd';
import moment from 'moment';
import apiCall from '../../utils/apiCall';

const fetchData = async (filter, id) => {
  const response = await apiCall(
    `device-info/?filter=${filter}&user=${id}`,
    'GET',
    null,
    true
  );
  console.log(response);
};

const FullUserInfo = ({ user }) => {
  return (
    <div className="user-info-div">
      <div className="title">
        <h3>User Details</h3>
      </div>
      <div className="details">
        <div className="details__wrapper">
          <p className="label">First Name</p>
          <p className="data">{user.first_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Last Name</p>
          <p className="data">{user.last_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Gender</p>
          <p className="data">{user.gender}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Email</p>
          <p className="data data--email">{user.email}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Phone Number</p>
          <p className="data">{user.phone_number}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Address</p>
          <p className="data">{user.address}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Marital Status</p>
          <p className="data">{user.marital_status}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Date of Birth</p>
          <p className="data">{user.date_of_birth}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Last Login</p>
          <p className="data">
            {moment(user.last_login).format('MMM Do, YYYY')}
          </p>
        </div>
      </div>
      <div className="user-info-div__cta-btns">
        <button
          className="btn btn--calls"
          onClick={() => fetchData('call_logs', user.id)}
        >
          <Icon type="download" />
          Call Log
        </button>
        <button
          className="btn btn--sms"
          onClick={() => fetchData('sms', user.id)}
        >
          <Icon type="download" />
          SMS Data
        </button>
      </div>
    </div>
  );
};

export default FullUserInfo;
