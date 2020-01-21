import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Button, Avatar } from 'antd';

const menu = () => (
  <Menu>
    <Menu.Item>
      <a href="/">Update Profile</a>
    </Menu.Item>
    <Menu.Item>
      <Button type="danger">Log Out</Button>
    </Menu.Item>
  </Menu>
);

const Appheader = () => (
  <div>
    <div className="dash-header">
      <div className="dash-header__item">
        <Link to="/">Home</Link>
      </div>
      <div className="dash-header__item dash-header__item--halo">
        <Dropdown overlay={menu}>
          <span className="avatar-glow">
            <Avatar size={40} icon="user" className="ant-dropdown-link" />
          </span>
        </Dropdown>
      </div>
    </div>
  </div>
);

export default Appheader;
