
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./page/Home"
import Login from './components/Login'
import Regester from './components/Regester'
import { UserProvider } from './UserContext'


function App() {


  return (
    <>  
    <BrowserRouter>
    <UserProvider> 

  
   <Navbar/>
    <Routes>
     
      <Route path='/home' element ={<Home/>}></Route>
      <Route path='/' element ={<Login/>}></Route>
      <Route path='/register' element ={<Regester/>}></Route>
    </Routes>
    </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
