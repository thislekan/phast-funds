import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import moment from 'moment';
import DataTable from '../tables';
import apiCall from '../../utils/apiCall';

const formatData = (info) => ({
  key: info.id,
  amount: `₦${Number(info.amount).toLocaleString()}`,
  status: info.status,
  tenor: `${info.tenor} days`,
  applied: moment(info.applied_date).format('MMM Do YYYY'),
  purpose: info.purpose,
  user: info.user.email,
  info,
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
    };
    getAllLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        title="Loans Table"
      />
    </Col>
  );
};

export default Loans;
