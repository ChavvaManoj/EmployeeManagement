import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponents from './assets/components/ListEmployeeComponents'
import HeaderComponent from './assets/components/HeaderComponent'
import FooterComponent from './assets/components/FooterComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './assets/components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element = { <ListEmployeeComponents /> }></Route>
        <Route path='/employees' element={<ListEmployeeComponents/>}></Route>
        <Route path='/add-employee'element={<EmployeeComponent/>}></Route>
        <Route path ='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
