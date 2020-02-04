import React from 'react';
import { Timeline } from 'antd';
import moment from 'moment';

const StatusTimeline = (props) => (
  <div className="active-loan__timeline">
    <Timeline>
      {props.data.map((info, key) => (
        <Timeline.Item color="green" key={key}>
          Loan status changed from {info.previous_status} to {info.new_status}{' '}
          on {moment(info.update_date).format('MMM DD, YYYY')}
        </Timeline.Item>
      ))}
    </Timeline>
  </div>
);

export default StatusTimeline;
