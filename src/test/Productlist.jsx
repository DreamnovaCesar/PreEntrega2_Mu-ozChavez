import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const products = [
            { id: 1, name: 'Product 1', price: 10.99 },
            { id: 2, name: 'Product 2', price: 20.99 },
            { id: 3, name: 'Product 3', price: 30.99 },
            { id: 4, name: 'Product 4', price: 40.99 },
          ];
          resolve(products);
        }, 3000);
      });
    };

    getProducts().then((products) => {
      setProducts(products);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className='grid grid-cols-5 gap-4'>
    <div className="bg-blue-300 mx-8 my-8 py-2 px-4 shadow-lg animate-pulse">
      <h2 className="text-gray-900 font-medium m-4">Product List</h2>
      <ul className="text-blue-300">
        {products.map((product) => (
          <li className= "text-gray-700 font-light p-4" key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default ProductList;