import React from 'react';

const CurrentDate = () => {
  const date = new Date();

  return <div>{date.toLocaleDateString()}</div>;
};

export default CurrentDate;