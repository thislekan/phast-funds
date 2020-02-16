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

const organizeData = (response) => {
  const loanData = [];
  response.results.forEach((element) => {
    const formatted = formatData(element);
    loanData.push(formatted);
  });
  return loanData;
};

const initialState = {
  data: [],
  error: '',
  loading: false,
  next: '',
  previous: '',
};

const Loans = (props) => {
  const [state, setState] = useState(initialState);
  const errorCatcher = (error) => setState({ ...state, error });
  const dataFetcher = async (route, prevOrNext) => {
    setState({ ...state, loading: true });
    const response = await apiCall(route, 'GET', null, true, prevOrNext);
    if (response.message) {
      return errorCatcher(response.message.non_field_errors[0]);
    }
    const loanData = organizeData(response);
    setState({
      ...state,
      data: loanData,
      loading: false,
      next: response.next,
      previous: response.previous,
    });
  };
  const prevOrNext = async (route) => dataFetcher(route, true);

  useEffect(() => {
    const getAllLoans = async () => dataFetcher('loans/');
    getAllLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Col xs={24} className={`${props.hideLoanHistory ? 'hide-loan-history' : ''}`}>
      <DataTable
        loanData
        data={props.loanHistory || state.data}
        isLoading={state.loading}
        title="Loans Table"
        previous={state.previous}
        next={state.next}
        getPrevious={prevOrNext}
        getNext={prevOrNext}
      />
    </Col>
  );
};

export default Loans;
