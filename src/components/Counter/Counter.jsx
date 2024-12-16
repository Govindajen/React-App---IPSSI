import { useState } from 'react';
import Affichage from '../Affichage/Affichage';
import './counter.css';

export default function Counter () {
    const [counter, setCounter] = useState(0)

    const increment = () => {
      setCounter(counter + 1)
    }
  
    const decrement = () => {
      (counter >= 1) && setCounter(counter - 1)
    }
    const reset = () => {
      setCounter(0)
    }
    
    return (
    <div className='counter'>
        <Affichage counter={counter} />
        <div className='counterContainer'>

          <button onClick={increment} className='btn'>
            +1
          </button>
          <button onClick={decrement} className='btn'>
            -1
          </button>
          <button onClick={reset} className='btn'>
            Reset Counter
          </button>
        </div>
    </div>
    )
}