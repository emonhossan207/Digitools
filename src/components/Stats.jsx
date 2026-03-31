import React from 'react';

const Stats = () => {
  return (
    <div className="bg-primary-g text-white py-20 px-4 lg:px-20" id="stats">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl lg:text-6xl font-bold">50K+</div>
          <div className="text-lg text-white/80 font-medium">Active Users</div>
        </div>
        <div className="flex flex-col items-center gap-2 border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
          <div className="text-4xl lg:text-6xl font-bold">200+</div>
          <div className="text-lg text-white/80 font-medium">Premium Tools</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl lg:text-6xl font-bold">4.9</div>
          <div className="text-lg text-white/80 font-medium">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
