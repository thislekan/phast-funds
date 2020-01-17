import React from 'react';
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

const DataTable = (props) => {
  const columns = props.loanData ? loanColumns : usersColumns;
  return (
    <div className="table-wrapper">
      <div className="dash-header__search">
        <Form layout="inline" onSubmit={(e) => e.preventDefault()}>
          <Form.Item>
            <Input
              prefix={<Icon type="form" />}
              placeholder="Enter search item"
            />
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
                props.location.pathname === '/'
                  ? props.history.push(`/details/users/${record.key}`)
                  : props.history.push(`/details/loans/${record.key}`);
              },
            };
          }}
          columns={columns}
          dataSource={props.data}
        />
      </div>
    </div>
  );
};

export default withRouter(DataTable);
