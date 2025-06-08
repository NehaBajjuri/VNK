import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './MyButton'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import NavbarComponent from './components/NavbarComponent';
import CardGrid from './components/CardGrid';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent/>
      <CardGrid/>
    </>
       
  )
}

export default App
