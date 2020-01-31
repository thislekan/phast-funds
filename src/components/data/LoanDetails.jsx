import React from 'react';
import { UserCard } from './UserDetails';

const LoanDetails = () => {
  const details = JSON.parse(sessionStorage.getItem('info'));
  return (
    <div className="details-wrapper">
      <UserCard user={details.user} />
      <div className="single-loan__details">
        <div className="card-title">
          <p>
            <b>Loan Details</b>
          </p>
        </div>
        <div className="data amount">
          <p>
            <b>Amount: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {Number(details.amount).toLocaleString()}
          </p>
        </div>
        <div className="data">
          <p>
            <b>Repaid: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {details.amount_repaid ? details.amount_repaid : 0}
          </p>
        </div>
        <div className="data duration">
          <p>
            <b>Duration: </b>
          </p>
          <p>{details.tenor} days</p>
        </div>
        <div className="data ">
          <p>
            <b>Status: </b>
          </p>
          <p>{details.status}</p>
        </div>
        <div className="data">
          <p>
            <b>Purpose: </b>
          </p>
          <p>{details.purpose}</p>
        </div>
        <div className="data">
          <p>
            <b>Balance: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>
            {details.amount_repaid
              ? details.amount - details.amount_repaid
              : Number(details.amount).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
