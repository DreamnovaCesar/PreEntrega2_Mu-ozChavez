
import React, { useState } from "react";

function ClickTracker() {
  const [count, setCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(null);

  const handleClick = () => {
    setCount(count + 1);
    setLastClickTime(new Date());
  };

  return (
    <div>
      <button className=" animate-pulse ml-5 mt-6 bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>Click me!</button>
      <p className='ml-5 mt-6 bg-gray-100 rounded-full px-7 py-2 text-sm font-medium'> Number of clicks: {count}</p>
      {lastClickTime && (
        <p className='ml-5 mt-6 bg-gray-100 rounded-full px-7 py-2 text-sm font-medium'>Last click time: {lastClickTime.toLocaleString()}</p>
      )}
    </div>
  );
}

export default ClickTracker;
