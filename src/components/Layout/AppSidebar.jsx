import React from 'react';
import { Icon, Button } from 'antd';

const AppSideBar = () => (
  <nav className="sidebar">
    <div className="sidebar__wrapper">
      <div className="sidebar__wrapper__logo-div">
        <p className="logo">Phast Money</p>
      </div>
      <div className="sidebar__wrapper__links-div">
        <div className="wrapper">
          <a href="/" className="nav-item">
            <Icon type="team" />
            <span>Users</span>
          </a>
        </div>
        <div className="wrapper">
          <a href="/loans" className="nav-item">
            <Icon type="money-collect" />
            <span>Loans</span>
          </a>
        </div>
        <div className="wrapper">
          <a href="/" className="nav-item">
            <Icon type="contacts" />
            <span>Profile</span>
          </a>
        </div>
      </div>
      <div className="sidebar__wrapper__logout-div">
        <Button type="danger">
          <Icon type="logout" />
          LOG OUT
        </Button>
      </div>
    </div>
  </nav>
);

export default AppSideBar;
