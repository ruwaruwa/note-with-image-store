import { useState } from 'react'

import viteLogo from '/vite.svg'
import Header from './components/Header'
import Forms from './components/forms/Forms'

import Filepost from './components/files/Newfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header/>
      
      <Forms/>
     
      </div>
    </>
  )
}

export default App
