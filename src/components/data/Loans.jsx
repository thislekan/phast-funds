import React from 'react';
import { Col } from 'antd';
import DataTable from '../tables';

const data = [
  {
    key: 0,
    loaned: 34500,
    duration: '14th Feb, 2019',
    status: 'not completed',
    paid: 14000,
    balance: 20500,
  },
  {
    key: 1,
    loaned: 34500,
    duration: '14th Feb, 2019',
    status: 'not completed',
    paid: 14000,
    balance: 20500,
  },
  {
    key: 2,
    loaned: 34500,
    duration: '14th Feb, 2019',
    status: 'not completed',
    paid: 14000,
    balance: 20500,
  },
  {
    key: 3,
    loaned: 34500,
    duration: '14th Feb, 2019',
    status: 'not completed',
    paid: 14000,
    balance: 20500,
  },
];

const Loans = (props) => (
  <Col
    xs={24}
    className={`${props.hideLoanHistory ? 'hide-loan-history' : ''}`}
  >
    <DataTable loanData data={props.loanHistory || data} />
  </Col>
);

export default Loans;
