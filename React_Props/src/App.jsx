import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 text-white p-10 rounded-xl mb-4'>Tailwind testing</h1> 
      <Card username="Tusharr"/>
      <Card username="Tusha"/>
      <Card/>
    </>
  )
}

export default App
