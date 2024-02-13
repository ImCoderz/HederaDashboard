import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-800'>
      <Form/>  
    </div>
  )
}

export default App
