import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Guitars from './components/Guitars/Guitars'
import AboutUs from './components/AboutUs/AboutUs'
import Cart from './components/Cart/Cart'
import FindArtists from './components/FindArtists/FindArtists.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/Find_Artists" element={<FindArtists/>} />

            <Route path="/Guitars" element={<Guitars/>} />

            <Route path="/AboutUs" element={<AboutUs/>} />

            <Route path="/Cart" element={<Guitars/>} />
          </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App