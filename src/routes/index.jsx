import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';

import AppSideBar from '../components/Layout/AppSidebar';
import AppHeader from '../components/Layout/AppHeader';
import Users from '../components/data/Users';
import Loans from '../components/data/Loans';
import UserDetails from '../components/data/UserDetails';
import LoanHistory from '../components/data/LoanHistory';

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
              <Route path="/" component={Users} exact />
              <Route path="/loans" component={Loans} exact />
              <Route path="/loans/:id" component={LoanHistory} exact />
              <Route path="/users/:id" component={UserDetails} exact />
            </Switch>
          </Content>
        </Col>
      </Row>
    </div>
  </BrowserRouter>
);

export default AppRouter;
