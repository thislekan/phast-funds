import React, { useState } from 'react';
import { Icon } from 'antd';

const initialState = { pageLimit: 10, showOptions: false };
const Pagination = (props) => {
  const { totalRecords = 0 } = props;
  const [state, setState] = useState(initialState);
  const toggleShowOptions = () => setState({ ...state, showOptions: !state.showOptions });

  const numberOfBlocks = totalRecords
    ? Array.from({ length: Math.ceil(totalRecords / props.pageLimit) }, (v, index) => index)
    : [0];
  return (
    <div className="pagination">
      <div className="pagination__right-wrapper">
        <div>
          <span className="limit">{props.pageLimit}</span>
          <span className="limit-selector" onClick={toggleShowOptions}>
            <Icon type="caret-up" />
          </span>
          <span className={`${state.showOptions ? 'limit-list' : 'limit-list limit-list--hide'}`}>
            <li
              value="10"
              onClick={(e) => {
                props.setpageLimit(e);
                toggleShowOptions();
              }}
            >
              10
            </li>
            <li
              value="20"
              onClick={(e) => {
                props.setpageLimit(e);
                toggleShowOptions();
              }}
            >
              20
            </li>
            <li
              value="30"
              onClick={(e) => {
                props.setpageLimit(e);
                toggleShowOptions();
              }}
            >
              30
            </li>
          </span>
        </div>
        <p>Items per page</p>
      </div>
      <div className="pagination__left-wrapper">
        {props.previous && (
          <div className="pagination__left-wrapper__btns">
            <button
              className="control control--links"
              onClick={() => props.getPrevious(props.next, true)}
            >
              Previous
            </button>
          </div>
        )}
        <div className="pagination__left-wrapper__btns">
          {numberOfBlocks.map((val, index) => (
            <button
              className={`${
                props.currentPage === val + 1
                  ? 'control control--pages control--pages--active'
                  : 'control control--pages'
              }`}
              key={index}
              onClick={() => props.setCurrentPage(val + 1)}
            >
              {val + 1}
            </button>
          ))}
        </div>
        {props.next && (
          <div className="pagination__left-wrapper__btns">
            <button
              className="control control--links"
              onClick={() => props.getNext(props.next, true)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
