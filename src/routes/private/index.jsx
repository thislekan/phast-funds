import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Users from '../../components/data/Users';
import LoanHistory from '../../components/data/LoanHistory';
import Loans from '../../components/data/Loans';
import SingleLoanHistory from '../../components/data/SingleLoanHistory';

const PrivateRoutes = () => (
  <Switch>
    <Route path="/users" component={Users} exact />
    <Route path="/loans" component={Loans} exact />
    <Route path="/details/loans/:id" component={SingleLoanHistory} exact />
    <Route path="/details/users/:id" component={LoanHistory} exact />
  </Switch>
);

export default PrivateRoutes;
