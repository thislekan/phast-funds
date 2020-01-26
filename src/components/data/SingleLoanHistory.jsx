import React from 'react';
import Table from '../tables/index';

const data = [
  {
    key: 0,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 1,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 2,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 3,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 4,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 5,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 6,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 7,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 8,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 9,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 10,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 11,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
  {
    key: 12,
    date: '23rd April, 2002',
    amount: 345000,
    method: 'Transfer',
    balance: 5000,
  },
];

const SingleLoanHistory = () => (
  <div className="single-loan">
    <div className="details-wrapper">
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
            <span className="naira">&#x20A6;</span>5,000
          </p>
        </div>
        <div className="data duration">
          <p>
            <b>Duration: </b>
          </p>
          <p>23rd Feb, 2019</p>
        </div>
        <div className="data ">
          <p>
            <b>Status: </b>
          </p>
          <p>Inactive</p>
        </div>
        <div className="data">
          <p>
            <b>Paid: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>345,000
          </p>
        </div>
        <div className="data">
          <p>
            <b>Balance: </b>
          </p>
          <p>
            <span className="naira">&#x20A6;</span>5,000
          </p>
        </div>
      </div>
    </div>
    <div className="repayment-table">
      <Table singleLoanHistory data={data} />
    </div>
  </div>
);

export default SingleLoanHistory;
