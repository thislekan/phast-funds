import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Form, Icon, Input, Button } from 'antd';

const loanColumns = [
  {
    title: 'Loaned',
    dataIndex: 'loaned',
    key: 'loaned',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
];

const usersColumns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const singleLoanHistory = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
];

const columnsSwitch = (props) => {
  if (props.loanData) return loanColumns;
  if (props.singleLoanHistory) return singleLoanHistory;
  return usersColumns;
};

const DataTable = (props) => {
  const [state, setState] = useState({ data: [] });
  const filterData = (e) => {
    const { value } = e.target;
    setState({ data: [...value] });
  };
  return (
    <div className="table-wrapper">
      <div className="dash-header__search">
        <Form layout="inline" onSubmit={(e) => e.preventDefault()}>
          <Form.Item>
            <Input
              prefix={<Icon type="form" />}
              placeholder="Enter search item"
              onChange={filterData}
            />
            {/* <button className="search-cancel">
              <Icon type="delete" />
            </button> */}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="table-wrapper__table-content">
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                props.location.pathname === '/users'
                  ? props.history.push(`/details/users/${record.key}`)
                  : props.history.push(`/details/loans/${record.key}`);
              },
            };
          }}
          columns={columnsSwitch(props)}
          dataSource={(state.data.length && state.data) || props.data}
        />
      </div>
    </div>
  );
};

export default withRouter(DataTable);
