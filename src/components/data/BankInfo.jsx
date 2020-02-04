import React from 'react';
import { Icon } from 'antd';

const BankInfo = ({ user }) => {
  return (
    <div className="bank-info">
      <div className="top-div">
        <div className="icon">
          <Icon type="bank" className="icon" />
        </div>
        <div className="title">
          <h3>Bank Details</h3>
        </div>
      </div>
      <div className="details">
        <div className="details__wrapper">
          <p className="label">Bank Name</p>
          <p className="data">{user.bank_info.bank_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Account Name</p>
          <p className="data">{user.bank_info.account_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">BVN Number</p>
          <p className="data">{user.bank_info.bvn}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Account Number</p>
          <p className="data">{user.bank_info.account_number}</p>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
