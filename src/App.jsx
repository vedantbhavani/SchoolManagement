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
import Register from './Register'
import Login from './Login'


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
              <Home activeClassName = "selected"/>

            </>}
          />

          <Route
            path='/home'
            element={<>
              <Navbar
              displayon = ""
                headertitle="Welcome To My VS School."
              />
              <Home  activeClassName = "selected"/>
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
              <About  activeClassName = "selected"/>
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
              <Teachers  activeClassName = "selected"/>
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

          <Route
            path='/register'
            element={<>
              <Navbar
                headertitle="Blogs"
                displayon = "none"
                headerdesc="Our enjoyable movement will capture in our Blogs"
                />
              <Register />
            </>}
          />

          <Route
            path='/login'
            element={<>
              <Navbar
                headertitle="Blogs"
                displayon = "none"
                headerdesc="Our enjoyable movement will capture in our Blogs"
                />
              <Login />
            </>}
          />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
