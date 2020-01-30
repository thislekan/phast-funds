import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import moment from 'moment';
import DataTable from '../tables';
import apiCall from '../../utils/apiCall';

const formatData = (info) => ({
  key: info.id,
  amount: info.amount,
  status: info.status,
  active: info.is_active ? 'Active' : 'Not Active',
  applied: moment(info.applied_date).format('MMM Do YYYY'),
  purpose: info.purpose,
  user: info.user.email,
});

const Loans = (props) => {
  const [state, setState] = useState({ data: [], error: '', loading: false });
  const errorCatcher = (error) =>
    setState({
      ...state,
      error,
      // showModal: true,
    });

  useEffect(() => {
    const getAllLoans = async () => {
      setState({ ...state, loading: true });
      const response = await apiCall('loans/', 'GET', null, true);
      if (response.message) {
        return errorCatcher(response.message.non_field_errors[0]);
      }
      const loanData = [];
      response.results.forEach((element) => {
        const formatted = formatData(element);
        loanData.push(formatted);
      });
      setState({ data: loanData, loading: false });
      console.log(response);
    };
    getAllLoans();
  }, []);
  return (
    <Col
      xs={24}
      className={`${props.hideLoanHistory ? 'hide-loan-history' : ''}`}
    >
      <DataTable
        loanData
        data={props.loanHistory || state.data}
        isLoading={state.loading}
      />
    </Col>
  );
};

export default Loans;
