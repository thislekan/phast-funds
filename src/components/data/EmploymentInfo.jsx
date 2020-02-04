import React from 'react';
import moment from 'moment';
import WorkingMan from '../../images/worker.svg';

const EmploymentInfo = (props) => {
  const { employment_info } = props.user;

  return (
    <div className="employment-info">
      <div className="top-div">
        <div className="icon">
          <img src={WorkingMan} alt="worker" />
        </div>
        <div className="title">
          <h3>Employment Information</h3>
        </div>
      </div>
      <div className="details">
        <div className="details__wrapper">
          <p className="label">Status</p>
          <p className="data">{employment_info.status}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Employer's Name</p>
          <p className="data">{employment_info.employers_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Employer's Address</p>
          <p className="data">{employment_info.employers_address}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Employment Date</p>
          <p className="data">
            {moment(employment_info.employment_date).format('MMM Do, YYYY')}
          </p>
        </div>
        <div className="details__wrapper">
          <p className="label">Employee's Salary</p>
          <p className="data">
            <span className="naira">&#x20A6;</span>
            {employment_info.employee_salary
              ? Number(employment_info.employee_salary).toLocaleString()
              : 0}
          </p>
        </div>
        <div className="details__wrapper">
          <p className="label">Business Name</p>
          <p className="data">{employment_info.business_name}</p>
        </div>
        <div className="details__wrapper">
          <p className="label">Business Address</p>
          <p className="data">{employment_info.business_address}</p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentInfo;
