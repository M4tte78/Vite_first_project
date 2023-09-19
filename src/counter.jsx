import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count => count + 1)
    }

    function decrement() {
        setCount(count => count - 1)
    }

    
    
    return (
        <div className="counter">
            <button onClick={() => increment()}>+</button>
            <button className='ml-' onClick={() => decrement()}>-</button>
            <p>Count : {count}</p>
            <input
                type="text" />

        </div>
      )
}
 
export default Counter;