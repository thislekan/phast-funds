import React from 'react';
import { Col, Button, Timeline, Icon } from 'antd';
import userImg from '../../images/IG Image.jpg';

const UserDetails = () => (
  <div id="user-container">
    <Col xs={24}>
      <div className="user-details">
        <div className="user-details__info">
          <div className="user-details__info__avatar">
            <img src={userImg} alt="user name" />
          </div>
          <div className="user-details__info__content">
            <p className="data name">
              <b>Name: </b>Firstname Lastname
            </p>
            <p className="data email">
              <b>Email: </b>you@sample.com
            </p>
            <p className="data phone">
              <b>Phone: </b>0903458989
            </p>
            <p className="data address">
              <b>Address: </b> 67B, Block A, Flat 4, Zhengshou, China
            </p>
          </div>
        </div>
        <div className="user-details__btns-div">
          <button className="btn btn--calls">
            <Icon type="download" />
            Call Log
          </button>
          <button className="btn btn--sms">
            <Icon type="download" />
            SMS Data
          </button>
        </div>
      </div>
    </Col>
    <Col xs={24}>
      <div className="active-loan">
        <div className="active-loan__details">
          <div className="active-loan__details__wrapper">
            <p className="data label">
              <b>Date: </b>
            </p>
            <p className="data date">23rd Feb, 2019</p>
          </div>
          <div className="active-loan__details__wrapper">
            <p className="data label">
              <b>Loaned: </b>
            </p>
            <p className="data loaned">
              <span className="naira">&#x20A6;</span>345,000
            </p>
          </div>
          <div className="active-loan__details__wrapper">
            <p className="data label">
              <b>Paid: </b>
            </p>
            <p className="data paid">
              <span className="naira">&#x20A6;</span>5,000
            </p>
          </div>
          <div className="active-loan__details__wrapper">
            <p className="data label">
              <b>Balance: </b>
            </p>
            <p className="data balance">
              <span className="naira">&#x20A6;</span>340,000
            </p>
          </div>
          <div className="active-loan__details__wrapper">
            <p className="data label">
              <b>Date: </b>
            </p>
            <p className="data due-date">22nd Feb, 2020</p>
          </div>
        </div>
        <div className="reveal-btn">
          <Button>Show History</Button>
        </div>
        <div className="active-loan__timeline">
          <Timeline></Timeline>
        </div>
      </div>
    </Col>
  </div>
);

export default UserDetails;
