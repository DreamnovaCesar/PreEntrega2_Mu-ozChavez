import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {
    return (
      <div className="flex items-center">
        <span className="ml-2 bg-gray-100 rounded-full px-7 py-2 text-sm font-medium text-gray-600">0</span>
        <BsFillCartCheckFill className=" ml-6 text-gray-200" size={24} />
      </div>
    );
  };
  
export default CartWidget;
  