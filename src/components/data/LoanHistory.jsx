import React, { useState } from 'react';
import { Button } from 'antd';
import UserDetails from './UserDetails';
import Loans from './Loans';

const data = [
  {
    key: 0,
    loaned: 345000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 345000,
    balance: 0,
  },
  {
    key: 1,
    loaned: 500,
    duration: '14th Feb, 2069',
    status: 'completed',
    paid: 500,
    balance: 0,
  },
  {
    key: 2,
    loaned: 34500,
    duration: '14th Feb, 2029',
    status: 'completed',
    paid: 14000,
    balance: 20500,
  },
  {
    key: 3,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 4,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 5,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 6,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 7,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 8,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 9,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 10,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 11,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 12,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
  {
    key: 13,
    loaned: 23000,
    duration: '14th Feb, 2019',
    status: 'completed',
    paid: 23000,
    balance: 0,
  },
];

const initialState = { showUserDetails: false };

const LoanHistory = () => {
  const [state, setState] = useState(initialState);
  const toggleUserDetails = () =>
    setState({ ...state, showUserDetails: !state.showUserDetails });

  return (
    <div
      className={`${
        state.showUserDetails
          ? 'loan-history loan-history--scrolled-height'
          : 'loan-history'
      }`}
    >
      <div className="user-details-container">
        <UserDetails hideContainer={state.showUserDetails} />
        <Button
          className="user-details-container__toggle-btn"
          type="primary"
          onClick={toggleUserDetails}
        >
          {state.showUserDetails ? 'Hide User Details' : 'Show User Details'}
        </Button>
      </div>
      <Loans loanHistory={data} hideLoanHistory={state.showUserDetails} />
    </div>
  );
};

export default LoanHistory;
