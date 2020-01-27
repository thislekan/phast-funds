import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';

import ProtectedRoutes from './ProtectedRoutes';
import PrivateRoutes from './private';
import AppSideBar from '../components/Layout/AppSidebar';
import AppHeader from '../components/Layout/AppHeader';
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
              <ProtectedRoutes>
                <PrivateRoutes />
              </ProtectedRoutes>
            </Switch>
          </Content>
        </Col>
      </Row>
    </div>
  </BrowserRouter>
);

export default AppRouter;
