import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Nav title="ShopX"/>
      <div>
        <Routes>
          <Route
          element={<Home/>}
          path='/'
          />
          <Route
          element={<About/>}
          path='/about'
          />
          <Route
          element={<Signup/>}
          path='/signup'
          />
          <Route
          element={<Login/>}
          path='/login'
          />
          <Route
          element={<Contact/>}
          path='/contact'
          />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
