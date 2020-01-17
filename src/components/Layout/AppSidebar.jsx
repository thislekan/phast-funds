import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

const AppSideBar = () => (
  <nav className="sidebar">
    <div className="sidebar__wrapper">
      <div className="sidebar__wrapper__logo-div">
        <p className="logo">Phast Money</p>
      </div>
      <div className="sidebar__wrapper__links-div">
        <div className="wrapper">
          <Link to="/" className="nav-item">
            <Icon type="team" />
            <span>Users</span>
          </Link>
        </div>
        <div className="wrapper">
          <Link to="/loans" className="nav-item">
            <Icon type="money-collect" />
            <span>Loans</span>
          </Link>
        </div>
        <div className="wrapper">
          <Link to="/" className="nav-item">
            <Icon type="contacts" />
            <span>Profile</span>
          </Link>
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
