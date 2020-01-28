import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import userAuth from '../utils/userAuth';

const ProtectedRoutes = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      userAuth.confirmToken() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoutes;
