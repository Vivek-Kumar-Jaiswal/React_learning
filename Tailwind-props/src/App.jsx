import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-900 text-white p-6 rounded-full mb-5'>Tailwind Test</h1>
      <Card userName="Vivek"/>
      <Card userName="Pagalia"/>
    </>
  )
}

export default App
