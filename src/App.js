import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './style.css'
export default function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}
