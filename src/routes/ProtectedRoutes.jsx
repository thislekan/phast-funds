import React from 'react';
import { Redirect } from 'react-router-dom';
import userAuth from '../utils/userAuth';

const ProtectedRoutes = (props) => {
  if (userAuth.authenticate()) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default ProtectedRoutes;
