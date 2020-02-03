import React, { useEffect, useState } from 'react';
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

const Users = () => {
  const [state, setState] = useState({ data: [], loading: false, error: '' });
  useEffect(() => {
    async function getAllUsers() {
      setState({ ...state, loading: true });
      const response = await apiCall('accounts/users/', 'GET', null, true);
      if (response.message)
        return setState({
          ...state,
          error: response.message.non_field_errors[0],
        });
      console.log(response);
      const userData = [];
      response.results.forEach((element) => {
        const formatted = formatData(element);
        userData.push(formatted);
      });
      setState({ data: userData, loading: false });
    }
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={24}>
      <DataTable
        data={state.data}
        isLoading={state.loading}
        title="Users Table"
      />
    </Col>
  );
};

export default Users;
