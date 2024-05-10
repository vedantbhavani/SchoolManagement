import './App.css'
import Home from './Components/Homes/Home'
import Navbar from './Components/HeaderFooter/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/HeaderFooter/Footer'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import About from './About'

function App() {

  return (
    <>
    <BrowserRouter>
      {/* <Navbar/> */}
    <Routes>  

        <Route 
        path='/' 
        element={<> 
        <Navbar 
        headertitle="Welcome To My VS School."
        /> 
        <Home/>
        <Footer/> 
        </>}
        />

        <Route 
        path='/about' 
        element={<> 
        <Navbar 
        headertitle="About Us"
        headerdesc = "This school is 99 years old. We are celebrate a 100 years. Next year We are make a new School after celebration." 
        /> 
        <About/> 
        </>}
        />


    </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
