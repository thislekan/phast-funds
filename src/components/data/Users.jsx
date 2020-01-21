import React from 'react';
import { Col } from 'antd';
import DataTable from '../tables';

const data = [
  {
    key: 0,
    name: 'John Brown',
    email: 'gui@user.com',
    phone: '0908909876989',
  },
  {
    key: 1,
    name: 'Johuiln Brown',
    email: 'gui@user.com',
    phone: '090895555989',
  },
  {
    key: 2,
    name: 'John Brown',
    email: '89i@user.com',
    phone: '0908909800989',
  },
  {
    key: 4,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 5,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 6,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 7,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 8,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 9,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 10,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 11,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 12,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 13,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 14,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
  {
    key: 14,
    name: 'Johnny Brown',
    email: 'yuiroi@user.com',
    phone: '09999909876989',
  },
];

const Users = () => (
  <Col xs={24}>
    <DataTable data={data} />
  </Col>
);

export default Users;
