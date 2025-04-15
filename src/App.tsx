// import { useState } from 'react'
import './App.css'
import OfferHeader from './components/OfferHeader'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CosmosUniverse from './components/CosmosUniverse'


function App() {

  return (
    <>
      <OfferHeader />
      <div className='bg-gradient-to-br from-black via-[#301934] to-orange-500'>
        <Navbar />
        <Home />
        <CosmosUniverse />
      </div>
      
    </>
  )
}

export default App
