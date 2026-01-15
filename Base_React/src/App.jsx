import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count+1)
  }

  return (
    <>
     <p>Hello Nevid {count}</p>
     <button onClick={add}>Increase</button>
    </>
  )
}

export default App
