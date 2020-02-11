import React, { useState } from 'react';
import UserCard from './UserCard';
import DetailsModal from './DetailsModal';
import FullLoanDetails from './FullLoanDetails';
import FullUserInfo from './FullUserInfo';

const LoanDetails = () => {
  const details = JSON.parse(sessionStorage.getItem('info'));
  const [state, setState] = useState({
    showUserDetailsModal: false,
    showLoanDetailsModal: false,
  });
  const toggleDetailsModal = () =>
    setState({ ...state, showUserDetailsModal: !state.showUserDetailsModal });
  const toggleLoanDetailsModal = () =>
    setState({ ...state, showLoanDetailsModal: !state.showLoanDetailsModal });
  return (
    <div className="details-wrapper">
      <UserCard user={details.user} toggleDetailsModal={toggleDetailsModal} />
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
            {details.amount_repaid
              ? Number(details.amount_repaid).toLocaleString()
              : 0}
          </p>
        </div>
        <div className="data duration">
          <p>
            <b>Tenor: </b>
          </p>
          <p>{details.tenor} days</p>
        </div>
        <div className="data data--status">
          <p>
            <b>Status: </b>
          </p>
          <p>{details.status}</p>
        </div>
        <div className="data data--purpose">
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
        <div className="btn-div">
          <button onClick={toggleLoanDetailsModal}>More Details</button>
        </div>
      </div>

      {state.showUserDetailsModal && (
        <DetailsModal
          showUserDetailsModal={state.showUserDetailsModal}
          toggleDetailsModal={toggleDetailsModal}
        >
          <FullUserInfo user={details.user} />
        </DetailsModal>
      )}

      {state.showLoanDetailsModal && (
        <DetailsModal
          showUserDetailsModal={state.showLoanDetailsModal}
          toggleDetailsModal={toggleLoanDetailsModal}
          gridless
        >
          <FullLoanDetails details={details} />
        </DetailsModal>
      )}
    </div>
  );
};

export default LoanDetails;
