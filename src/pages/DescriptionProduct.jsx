import Navbar from "../Components/Navbar";
import ItemDescriptionProduct from "../Components/ItemDescriptionProduct";
import { useParams } from "react-router-dom";
import { useContext } from 'react';

function DescriptionProduct() {

  let {id} = useParams();

    return (
      <div>
        <Navbar />
        <ItemDescriptionProduct id = {id}/>
      </div>
  );
};


export default DescriptionProduct;