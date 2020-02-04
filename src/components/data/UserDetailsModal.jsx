import React from 'react';
import { Icon } from 'antd';
import NextOfKin from './NextOfKin';
import BankInfo from './BankInfo';
import EmploymentInfo from './EmploymentInfo';
import FullUserInfo from './FullUserInfo';

const DetailsModal = (props) => (
  <div className="user-details-modal">
    <div className="close-div" onClick={props.toggleDetailsModal}>
      <Icon type="close-circle" theme="twoTone" />
    </div>
    <div className="user-details-modal__wrapper">
      <FullUserInfo user={props.user} />
      <EmploymentInfo user={props.user} />
      <NextOfKin user={props.user} />
      <BankInfo user={props.user} />
    </div>
  </div>
);

export default DetailsModal;
