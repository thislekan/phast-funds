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
];

const initialState = { showUserDetails: false };

const LoanHistory = () => {
  const [state, setState] = useState(initialState);
  const toggleUserDetails = () =>
    setState({ ...state, showUserDetails: !state.showUserDetails });

  return (
    <div className="loan-history">
      <div className="user-details-div">
        <div className="btn-toggler">
          <Button type="primary" onClick={toggleUserDetails}>
            User Info
          </Button>
        </div>
        {<UserDetails />}
      </div>
      <Loans LoanHistory={data} />
    </div>
  );
};

export default LoanHistory;
