import React from 'react';
import NextOfKin from './NextOfKin';
import BankInfo from './BankInfo';
import EmploymentInfo from './EmploymentInfo';
import UserBiodata from './UserBiodata';

const FullUserInfo = (props) => (
  <>
    <UserBiodata user={props.user} />
    <EmploymentInfo user={props.user} />
    <NextOfKin user={props.user} />
    <BankInfo user={props.user} />
  </>
);

export default FullUserInfo;
