import './App.css'
import Home from './Components/Homes/Home'
import Navbar from './Components/HeaderFooter/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/HeaderFooter/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Teachers from './Components/Teachers_Gallary/Teachers'
import Blog from './Blogs'
import Gallery from './Components/Teachers_Gallary/Gallery'
import Contact from './Contact'


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
              displayon = ""
              headertitle="Welcome To My VS School."
              />
              <Home />
            </>}
          />

          <Route
            path='/home'
            element={<>
              <Navbar
              displayon = ""
                headertitle="Welcome To My VS School."
              />
              <Home />
            </>}
          />

          <Route
            path='/about'
            element={<>
              <Navbar
                displayon = ""
                headertitle="About Us"
                headerdesc="This school is 99 years old. We are celebrate a 100 years. Next year We are make a new School after celebration."
                />
              <About />
            </>}
          />

          <Route
            path='/teachers'
            element={<>
              <Navbar
              displayon = ""
              headertitle="Our Best Facultys"
              headerdesc="We change many staff in 100 years. But all are Supportive."
              />
              <Teachers />
            </>}
          />

          <Route
            path='/gallery'
            element={<>
              <Navbar
              displayon = "none"
                headertitle="Our Best Facultys"
                headerdesc="We change many staff in 100 years. But all are Supportive."
              />
              <Gallery/>
            </>}
          />

          <Route
            path='/contact'
            element={<>
              <Navbar
                headertitle="Contact Us"
                displayon = ""
                headerdesc="If you are join with our Journey you can join us"
                />
              <Contact/>
            </>}
          />

          <Route
            path='/blogs'
            element={<>
              <Navbar
                headertitle="Blogs"
                displayon = ""
                headerdesc="Our enjoyable movement will capture in our Blogs"
                />
              <Blog />
            </>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
