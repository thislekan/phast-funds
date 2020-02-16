import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Col } from 'antd';
import DataTable from '../tables';
import apiCall from '../../utils/apiCall';

const formatData = (info) => ({
  key: info.id,
  name: `${info.first_name} ${info.last_name}`,
  email: info.email,
  phone: info.phone_number ? info.phone_number : '----',
  avatar: info.profile_picture,
  info,
});

const organizeData = (response) => {
  const userData = [];
  response.results.forEach((element) => {
    const formatted = formatData(element);
    userData.push(formatted);
  });
  return userData;
};

const initialState = {
  data: [],
  loading: false,
  error: '',
  next: '',
  previous: '',
};

const Users = () => {
  const { search } = useLocation();
  const searchTerm = queryString.parse(search);
  console.log(searchTerm);
  const [state, setState] = useState(initialState);
  const dataFetcher = async (route, prevOrNext) => {
    setState({ ...state, loading: true });
    const response = await apiCall(route, 'GET', null, true, prevOrNext);
    if (response.message)
      return setState({
        ...state,
        error: response.message.non_field_errors[0],
      });
    const userData = organizeData(response);
    setState({
      ...state,
      data: userData,
      loading: false,
      next: response.next,
      previous: response.previous,
    });
  };
  const prevOrNext = async (route) => dataFetcher(route, true);
  useEffect(() => {
    const getAllUsers = async () => {
      if (searchTerm.name) return dataFetcher(`accounts/users/?search=${searchTerm.name}`);
      return dataFetcher('accounts/users/');
    };
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm.name]);

  return (
    <Col xs={24}>
      <DataTable
        data={state.data}
        isLoading={state.loading}
        title="Users Table"
        previous={state.previous}
        next={state.next}
        getPrevious={prevOrNext}
        getNext={prevOrNext}
      />
    </Col>
  );
};

export default Users;
