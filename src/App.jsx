import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'
import Pricelist from './components/Pricelist/Pricelist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Pricelist></Pricelist>
        <Dashboard></Dashboard>
        <PhoneBar></PhoneBar>
        </div>
    </div>
  )
}

export default App
