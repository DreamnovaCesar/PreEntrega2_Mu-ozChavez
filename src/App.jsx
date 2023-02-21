import { useState } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import ItemListContainer from './Components/ItemListContainer';
import ClickTracker from './Components/ClickTracker';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <ItemListContainer></ItemListContainer>
        <ClickTracker></ClickTracker>
      </div>
    </div>
  )
}

export default App
