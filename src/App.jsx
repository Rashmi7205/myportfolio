import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='w-full flex flex-col'>
      <NavBar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
