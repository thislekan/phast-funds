import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import moment from 'moment';
import UserDetails from './UserDetails';
import Loans from './Loans';
import apiCall from '../../utils/apiCall';

const formatData = (info) => ({
  key: info.id,
  amount: `₦${Number(info.amount).toLocaleString()}`,
  status: info.status,
  tenor: `${info.tenor} days`,
  applied: moment(info.applied_date).format('MMM Do YYYY'),
  purpose: info.purpose,
  user: info.user.email,
  due: moment(info.due_date).format('MMM Do YYYY'),
  info,
});
const initialState = { showUserDetails: false, history: [], loading: false };

const LoanHistory = () => {
  const user = JSON.parse(sessionStorage.getItem('info'));
  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const toggleUserDetails = () =>
    setState({ ...state, showUserDetails: !state.showUserDetails });

  const errorCatcher = (error) => setState({ ...state, error });

  useEffect(() => {
    const getUserLoanHistory = async () => {
      setState({ ...state, loading: true });
      const response = await apiCall(`loans/user/${id}`, 'GET', null, true);

      if (response.message) {
        return errorCatcher(response.message.non_field_errors[0]);
      }

      const loanData = [];
      response.results.forEach((element) => {
        const formatted = formatData(element);
        loanData.push(formatted);
      });
      setState({ history: loanData, loading: false });
    };
    getUserLoanHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${
        state.showUserDetails
          ? 'loan-history loan-history--scrolled-height'
          : 'loan-history'
      }`}
    >
      <div className="user-details-container">
        <UserDetails hideContainer={state.showUserDetails} user={user} />
        <Button
          className="user-details-container__toggle-btn"
          type="primary"
          onClick={toggleUserDetails}
        >
          {state.showUserDetails ? 'Hide User Details' : 'Show User Details'}
        </Button>
      </div>
      <Loans
        loanHistory={state.history}
        hideLoanHistory={state.showUserDetails}
        isLoading={state.loading}
      />
    </div>
  );
};

export default LoanHistory;
