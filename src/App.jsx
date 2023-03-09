import { useState } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import ItemListContainer from './Components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Ropa';
import Contact from './pages/Contact';
import DescriptionProduct from './pages/DescriptionProduct';
import { CartProvider } from './hooks/ProductContext';

function App() {
  
  return (

    <>
        < CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DescriptionProduct/:id" element={<DescriptionProduct />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </CartProvider>
   
    </>

  );
}

export default App
