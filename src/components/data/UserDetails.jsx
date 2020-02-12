import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActiveLoan from './ActiveLoan';
import DetailsModal from './DetailsModal';
import UserCard from './UserCard';
import FullUserInfo from './FullUserInfo';
import apiCall from '../../utils/apiCall';

const initialState = {
  showHistory: false,
  showDetailsModal: false,
  activeLoan: {},
  statusHistory: [],
  error: '',
};

const UserDetails = (props) => {
  const user = JSON.parse(sessionStorage.getItem('info'));
  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const errorCatcher = (error) => setState({ ...state, error });
  const toggleDetailsModal = () =>
    setState({ ...state, showDetailsModal: !state.showDetailsModal });
  const toggleLoanHistory = () =>
    setState({ ...state, showHistory: !state.showHistory });
  useEffect(() => {
    const getActiveLoan = async () => {
      const response = await apiCall(
        `loans/active-loan/${id}`,
        'GET',
        null,
        true
      );
      if (response.message) {
        return errorCatcher(response.message.non_field_errors[0]);
      }

      setState({
        activeLoan: response.data.loan,
        loading: false,
        statusHistory: response.data.status_history,
      });
    };
    getActiveLoan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${
        props.hideContainer
          ? 'user-container'
          : 'user-container user-container--hide'
      }`}
    >
      <UserCard user={props.user} toggleDetailsModal={toggleDetailsModal} />
      <ActiveLoan
        loan={state.activeLoan}
        toggleLoanHistory={toggleLoanHistory}
        showHistory={state.showHistory}
        statusHistory={state.statusHistory}
      />
      {state.showDetailsModal && (
        <DetailsModal
          showDetailsModal={state.showDetailsModal}
          toggleDetailsModal={toggleDetailsModal}
        >
          <FullUserInfo user={user} />
        </DetailsModal>
      )}
    </div>
  );
};

export default UserDetails;
