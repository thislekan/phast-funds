import React from 'react';
import { Button } from 'antd';
import moment from 'moment';
import StatusTimeline from './StatusTimeline';

const ActiveLoan = (props) => (
  <div className="active-loan">
    <div className="active-loan__details">
      <div className="active-loan__details__title">
        <h3>Active Loan</h3>
      </div>
      <div className="content">
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Applied Date: </b>
          </p>
          <p className="data date">
            {moment(props.loan.approval_date).format('MMM Do YYYY')}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Date of Approval: </b>
          </p>
          <p className="data date">
            {moment(props.loan.applied_date).format('MMM Do YYYY')}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Due Date: </b>
          </p>
          <p className="data date">
            {moment(props.loan.due_date).format('MMM Do YYYY')}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Amount: </b>
          </p>
          <p className="data loaned">
            <span className="naira">&#x20A6;</span>
            {props.loan.amount ? Number(props.loan.amount).toLocaleString() : 0}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Paid: </b>
          </p>
          <p className="data paid">
            <span className="naira">&#x20A6;</span>
            {props.loan.amount_repaid
              ? Number(props.loan.amount_repaid).toLocaleString()
              : 0}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Tenor: </b>
          </p>
          <p className="data paid">
            {props.loan.tenor ? props.loan.tenor : 0} days
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Purpose: </b>
          </p>
          <p className="data">
            {props.loan.purpose ? props.loan.purpose : '---'}
          </p>
        </div>
        <div className="active-loan__details__wrapper">
          <p className="data label">
            <b>Balance: </b>
          </p>
          <p className="data balance">
            <span className="naira">&#x20A6;</span>
            {Number(props.loan.amount) - Number(props.loan.amount_repaid)
              ? (
                  Number(props.loan.amount) - Number(props.loan.amount_repaid)
                ).toLocaleString()
              : 0}
          </p>
        </div>
      </div>
    </div>

    <div className="reveal-btn-div">
      <Button onClick={props.toggleLoanHistory} type="primary">
        {!props.showHistory
          ? 'Show Active Loan History'
          : 'Close Active Loan History'}
      </Button>
    </div>
    {props.showHistory && <StatusTimeline data={props.statusHistory} />}
  </div>
);

export default ActiveLoan;
