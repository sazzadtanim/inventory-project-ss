import React from 'react';

const CurrentTime = () => {
  const time = new Date().toLocaleTimeString();

  return <div>{time}</div>;
};

export default CurrentTime;