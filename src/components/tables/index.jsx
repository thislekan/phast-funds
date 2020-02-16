import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Table, Form, Icon, Input, Button } from 'antd';
import Pagination from './Pagination';

const loanColumns = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Tenor',
    dataIndex: 'tenor',
    key: 'tenor',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Application Date',
    dataIndex: 'applied',
    key: 'applied',
  },
  {
    title: 'Purpose',
    dataIndex: 'purpose',
    key: 'purpose',
  },
  // {
  //   title: 'Due Date',
  //   dataIndex: 'due',
  //   key: 'due',
  // },
];

const usersColumns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (src) => <img src={src} alt="avatar" />,
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
  // {
  //   title: 'Balance',
  //   dataIndex: 'balance',
  //   key: 'balance',
  // },
];

const addOrRemoveDueDate = (route) => {
  if (route.includes('/details/users'))
    return (loanColumns[6] = {
      title: 'Due Date',
      dataIndex: 'due',
      key: 'due',
    });
  delete loanColumns[6];
};

const columnsSwitch = (props) => {
  if (props.loanData) return loanColumns;
  if (props.singleLoanHistory) return singleLoanHistory;
  return usersColumns;
};

const initialState = {
  data: [],
  info: {},
  pageData: {},
  pageLimit: 10,
  currentPage: 1,
};

const DataTable = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  addOrRemoveDueDate(pathname);
  const [state, setState] = useState(initialState);
  const setpageLimit = (e) => setState({ ...state, pageLimit: e.target.value });
  const setCurrentPage = (value) => setState({ ...state, currentPage: value });

  useEffect(() => {
    const pages = Array.from(
      { length: Math.ceil(props.data.length / state.pageLimit) },
      (v, index) => index
    );
    pages.forEach((element) => {
      let start = element;
      let end = state.pageLimit;
      setState({
        ...state,
        pageData: {
          ...state.pageData,
          [`data${element + 1}`]: props.data.slice(start, end),
        },
      });
      start = state.pageLimit + element;
      end += state.pageLimit;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);
  const filterData = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="table-wrapper">
      <div className="dash-header__search">
        <Form
          layout="inline"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`users?name=${state.name}`);
          }}
        >
          <Form.Item>
            <Input
              prefix={<Icon type="form" />}
              placeholder="Enter search item"
              name="name"
              onChange={filterData}
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
                if (props.singleLoanHistory) return;
                sessionStorage.setItem('info', JSON.stringify(record.info));
                pathname === '/users'
                  ? history.push(`/details/users/${record.key}`)
                  : history.push(`/details/loans/${record.key}`);
              },
            };
          }}
          columns={columnsSwitch(props)}
          dataSource={state.pageData[`data${state.currentPage}`]}
          loading={props.isLoading}
          title={() => props.title}
        />
        <Pagination
          pageLimit={state.pageLimit}
          setpageLimit={setpageLimit}
          setCurrentPage={setCurrentPage}
          currentPage={state.currentPage}
          next={props.next}
          previous={props.previous}
          getPrevious={props.getPrevious}
          getNext={props.getNext}
        />
      </div>
    </div>
  );
};

export default DataTable;
