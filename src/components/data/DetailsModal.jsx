import React from 'react';
import { Icon } from 'antd';

const DetailsModal = (props) => (
  <div className="user-details-modal">
    <div className="close-div" onClick={props.toggleDetailsModal}>
      <Icon type="close-circle" theme="twoTone" />
    </div>
    <div
      className={`${
        props.gridless
          ? 'user-details-modal__wrapper--gridless'
          : 'user-details-modal__wrapper'
      }`}
    >
      {props.children}
    </div>
  </div>
);

export default DetailsModal;
