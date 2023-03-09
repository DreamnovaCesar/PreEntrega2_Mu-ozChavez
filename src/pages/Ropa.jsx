import ItemListContainer from "../Components/ItemListContainer";
import Navbar from "../Components/Navbar";
import ProductContext from "../hooks/ProductContext";
import { useContext } from "react";

function About() {
  
  
  return (
      <div>
        <ItemListContainer category="men's clothing"/>
        <h1>About</h1>
      </div>
  );
}

export default About;