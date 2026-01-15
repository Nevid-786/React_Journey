import { useState } from 'react'
import Color from './color'

import './App.css'

function App() {
  const [colour, setColor] = useState("white")

  return (
    <>
    <div className="screen" style={{backgroundColor:colour}}>
      <div className="panel">
      <Color name="Red" setColor={setColor}/>
      <Color name="Blue"setColor={setColor} />
      <Color name="Black" setColor={setColor}/>

      <Color name="orange" setColor={setColor}/>
    </div>

    </div>
    
     
    </>
  )
}

export default App
