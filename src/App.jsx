import { useState } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import ItemListContainer from './Components/ItemListContainer';
import ClickTracker from './Components/ClickTracker';
import ProductList from './Components/Productlist';
import ProductListGPT from './Components/ProductlistGPT';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <ItemListContainer></ItemListContainer>
        <ClickTracker></ClickTracker>
        <ProductListGPT></ProductListGPT>
      </div>
    </div>
  )
}

export default App
