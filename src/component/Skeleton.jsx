import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-300 ${className} rounded-md `}></div>
    </div>
  );
};

export default Skeleton;
