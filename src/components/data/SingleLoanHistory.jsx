import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Table from '../tables/index';
import LoanDetails from './LoanDetails';
import apiCall from '../../utils/apiCall';

const formatData = (info) => ({
  key: info.id,
  amount: info.amount,
  method: info.method,
  date: moment(info.date_repaid).format('MMM Do YYYY'),
  info,
});

/**
 * @todo - finish up this task and add a modal for errors
 */

const SingleLoanHistory = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    history: [],
    error: '',
    loading: false,
  });
  const errorCatcher = (error) =>
    setState({
      ...state,
      error,
      // showModal: true,
    });
  useEffect(() => {
    const getLoanDetails = async () => {
      setState({ ...state, loading: true });
      const response = await apiCall(
        `loans/repayments-history/${id}`,
        'GET',
        null,
        true
      );

      if (response.message) {
        return errorCatcher(response.message.non_field_errors[0]);
      }

      const loanHistory = [];
      response.results.forEach((element) => {
        const formatted = formatData(element);
        loanHistory.push(formatted);
      });
      setState({ history: loanHistory, loading: false });
    };
    getLoanDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="single-loan">
      <LoanDetails />
      <div className="repayment-table">
        <Table
          singleLoanHistory
          data={state.history}
          isLoading={state.loading}
        />
      </div>
    </div>
  );
};

export default SingleLoanHistory;
