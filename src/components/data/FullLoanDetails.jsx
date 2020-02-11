import React from 'react';
import moment from 'moment';

const FullLoanDetails = (props) => (
  <div className="full-loan">
    <div className="full-loan__details">
      <div className="full-loan__details__title">
        <p>
          <b>Loan Details</b>
        </p>
      </div>
      <div className="full-loan__details__body">
        <div className="data amount">
          <p>
            <b>Amount: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {Number(props.details.amount).toLocaleString()}
          </p>
        </div>
        <div className="data duration">
          <p>
            <b>Tenor: </b>
          </p>
          <p>{props.details.tenor} days</p>
        </div>
        <div className="data">
          <p>
            <b>Repaid: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {props.details.amount_repaid
              ? Number(props.details.amount_repaid).toLocaleString()
              : 0}
          </p>
        </div>
        <div className="data ">
          <p>
            <b>Status: </b>
          </p>
          <p>{props.details.status}</p>
        </div>
        <div className="data">
          <p>
            <b>Purpose: </b>
          </p>
          <p>{props.details.purpose}</p>
        </div>
        <div className="data">
          <p>
            <b>Balance: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {props.details.amount_repaid
              ? props.details.amount - props.details.amount_repaid
              : Number(props.details.amount).toLocaleString()}
          </p>
        </div>
        <div className="data">
          <p>
            <b>Applied date: </b>
          </p>
          <p>{moment(props.details.applied_date).format('MMM Do, YYYY')}</p>
        </div>
        <div className="data">
          <p>
            <b>Disbursal Date: </b>
          </p>
          <p>{moment(props.details.disbursal_date).format('MMM Do, YYYY')}</p>
        </div>
        <div className="data">
          <p>
            <b>Due Date: </b>
          </p>
          <p>{props.details.due_date}</p>
        </div>
        <div className="data">
          <p>
            <b>Rejection Date: </b>
          </p>
          <p>{props.details.rejection_date ? props.rejection_date : 'N/A'}</p>
        </div>
      </div>
    </div>
  </div>
);

export default FullLoanDetails;
