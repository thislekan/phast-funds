import React from 'react';
import { Row, Col } from 'antd';
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

const Loans = () => (
  <Row>
    <Col xs={24}>
      <DataTable loanData data={data} />
    </Col>
  </Row>
);

export default Loans;
