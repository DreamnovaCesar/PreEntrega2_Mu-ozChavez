import React, { useState, useEffect } from 'react';


function Product({ product }) 
{

  let className = "bg-blue-300 mx-2 my-2 py-3 px-5 shadow-lg";
  if (product.price > 20) {
    className += " animate-pulse";
  }
  
  return (
    <div className={className}>
      <h3 className='text-gray-700 font-light mx-2 my-2 p-3'>{product.name}</h3>
      <p className='text-gray-700 font-light mx-2 my-2 p-4'>Price: ${product.price}</p>
    </div>
  );
}

function ProductListGPT() {
  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productList = [
          { id: 1, name: "Product 1", price: 10 },
          { id: 2, name: "Product 2", price: 20 },
          { id: 3, name: "Product 3", price: 30 },
          { id: 4, name: "Product 4", price: 40 },
          { id: 5, name: "Product 5", price: 50 },
          { id: 6, name: "Product 6", price: 60 },
          { id: 7, name: "Product 7", price: 70 },
        ];
        resolve(productList);
      }, 3000);
    });
  }

  useEffect(() => {
    getProductList().then((result) => {
      setProductList(result);
    });
  }, []);

  return (
    <div>
      <h2 className='flex items-center justify-center my-8 text-gray-900 font-medium'>Product List</h2>
      <div className='grid grid-flow-col auto-cols-max hover:auto-cols-min'>
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    
  );
}

export default ProductListGPT;
