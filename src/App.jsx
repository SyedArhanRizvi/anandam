import './App.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ This will now work
import Footer from './components/Footer';

function App() {
useEffect(() => {
    AOS.init({ duration: 1000,
      once: false,
     });
  }, []);
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
