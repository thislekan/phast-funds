import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';

import AppSideBar from '../components/Layout/AppSidebar';
import AppHeader from '../components/Layout/AppHeader';
import Users from '../components/data/Users';
import Loans from '../components/data/Loans';
import LoanHistory from '../components/data/LoanHistory';
import SingleLoanHistory from '../components/data/SingleLoanHistory';
import Login from '../components/Layout/Login';

const { Content } = Layout;
const AppRouter = () => (
  <BrowserRouter>
    <div className="dashboard">
      <Row>
        <Col xs={24} sm={6} lg={4}>
          <AppSideBar />
        </Col>
        <Col xs={24} sm={18} lg={20}>
          <AppHeader />
          <Content>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/users" component={Users} exact />
              <Route path="/loans" component={Loans} exact />
              <Route
                path="/details/loans/:id"
                component={SingleLoanHistory}
                exact
              />
              <Route path="/details/users/:id" component={LoanHistory} exact />
            </Switch>
          </Content>
        </Col>
      </Row>
    </div>
  </BrowserRouter>
);

export default AppRouter;
