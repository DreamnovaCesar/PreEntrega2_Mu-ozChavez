// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ItemProduct from './ItemProduct';

let ItemListContainer = ({category}) => {
  {/*const [items, setItems] = useState(['1', '2', '3', '5']);*/}
  var N = 20; 
  let [ids, setIDs] = useState(Array.from(Array.from(Array(N), (_, i) => i+1)));

  {/*let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Example array of product ids

    const handleIncrement = () => {
    let lastElement = parseInt(items.slice(-1))
    let SecondlastElement = parseInt(items.slice(-2))


    const newItem = lastElement + SecondlastElement;
    
    setItems([...items, newItem]);
  };*/}

  console.log(ids);

  return (
    <div className="bg-gray-300 p-2 shadow-lg">
      <Navbar />
      <div className="bg-gray-200 p-10">
        <div className="grid gap-1 sm:grid-cols-5 lg:grid-cols-4">
        {ids.map(id => (
          <ItemProduct category={category} id={id} />
        ))}
        </div>
      </div>
      
      {/*<h2 className="text-gray-700 font-medium m-4">Item List</h2>
      <ul className="text-gray-700">
        <button onClick={handleIncrement}>Add Item</button>
        {items.map((item, index) => (
          <li className="text-gray-900 font-light p-4" key={index}>{item}</li>
        ))}
      </ul>*/}
    </div>
  );
};

export default ItemListContainer;