
// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let ItemProduct = ({category, id}) => {

  let [title, setTitle] = useState('')
  let [description, setDescription] = useState('')
  let [image, setImage] = useState('')
  let [price, setPrice] = useState('')
  let [count, setCount] = useState('')
  let [rate, setRate] = useState('')
  let [category, setCategory] = useState('')

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {

    {/*let api = await fetch(
      `https://api.spoonacular.com/recipes/2/summary?apiKey=${import.meta.env.VITE_API_KEY}`
    ); /${id} */}

    let api = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );

    let data = await api.json();
    console.log(data);
    setTitle(data.title);
    setDescription(data.description);
    setImage(data.image);
    setPrice(data.price);
    setCount(data.rating.count);
    setRate(data.rating.rate);

    setCategory(data.category);

  };

  return (

    <div className="relative m-1 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <a className="flex mx-5 mt-5 h-70 overflow-hidden rounded-xl">
      <Link to={`/DescriptionProduct/${id}`}><img className="object-contain h-48 w-96" src={image} alt="product image" /></Link>
        <span className="absolute top-2 left-2 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </a>
      <div className="flex-1 mt-1 px-2 py-4">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            <svg aria-hidden="true" className={`h-5 w-5 ${rate >= 1 ?  'text-yellow-300' :  'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className={`h-5 w-5 ${rate >= 2 ?  'text-yellow-300' :  'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className={`h-5 w-5 ${rate >= 3 ?  'text-yellow-300' :  'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className={`h-5 w-5 ${rate >= 4 ?  'text-yellow-300' :  'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className={`h-5 w-5 ${rate >= 5 ?  'text-yellow-300' :  'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rate}</span>
          </div>
        </div>
        <Link to={`/DescriptionProduct/${id}`}><a className="flex mb-5 items-center justify-center rounded-md bg-slate-900 mt-5 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          </svg>Description</a></Link>
        
      </div>
  </div>

    
  );
};

export default ItemProduct;