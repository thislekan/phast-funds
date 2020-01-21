import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const AppSideBar = () => (
  <nav className="sidebar">
    <div className="sidebar__wrapper">
      <div className="sidebar__wrapper__logo-div">
        <p className="logo">Phast Money</p>
      </div>
      <div className="sidebar__wrapper__links-div">
        <Link to="/" className="nav-item">
          <Icon type="team" />
          <span>Users</span>
        </Link>
        <Link to="/loans" className="nav-item">
          <Icon type="money-collect" />
          <span>Loans</span>
        </Link>
        <Link to="/" className="nav-item">
          <Icon type="contacts" />
          <span>Profile</span>
        </Link>
      </div>
      <div className="sidebar__wrapper__logout-div">
        <button>
          <Icon type="logout" />
          LOG OUT
        </button>
      </div>
    </div>
  </nav>
);

export default AppSideBar;
