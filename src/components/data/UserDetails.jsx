import React, { useState } from 'react';
import { Col, Button, Timeline, Icon } from 'antd';
import userImg from '../../images/IG Image.jpg';

const initialState = {
  showHistory: false,
};

const UserDetails = (props) => {
  const [state, setState] = useState(initialState);
  const toggleLoanHistory = () =>
    setState({ ...state, showHistory: !state.showHistory });
  return (
    <div
      className={`${
        props.hideContainer
          ? 'user-container'
          : 'user-container user-container--hide'
      }`}
    >
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
              <b>Address: </b> 67B, Block A, Flat 4, Zhengshou, China. jkjjksdj
              jdfkjdfjkjfd kdioweiowe owekewkled
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
        <div className="reveal-btn-div">
          <Button onClick={toggleLoanHistory} type="primary">
            {!state.showHistory
              ? 'Show Active Loan History'
              : 'Close Active Loan History'}
          </Button>
        </div>
        {state.showHistory && (
          <div className="active-loan__timeline">
            <Timeline>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
