import React from 'react';
import { Timeline as AntdTimeline } from 'antd';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
  const events = [
    {
      date: '15th Feb 5:30 PM',
      title: 'Workshops Starts',
      description: 'Starting off with guidance sessions...',
    },
    {
      date: '20th Feb 10:00 PM',
      title: 'Registration Ends',
      description: "We'll review your application and will let you know.",
    },
    // Add more events as needed
  ];

  return (
    <div className="bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <AntdTimeline>
          {events.map((event, index) => (
            <AntdTimeline.Item key={index} color="purple">
              <TimelineEvent {...event} isLeft={index % 2 === 0} />
            </AntdTimeline.Item>
          ))}
        </AntdTimeline>
      </div>
    </div>
  );
};

export default Timeline;
