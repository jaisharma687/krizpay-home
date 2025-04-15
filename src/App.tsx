// import { useState } from 'react'
import './App.css'
import OfferHeader from './components/OfferHeader'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CosmosUniverse from './components/CosmosUniverse'
import CosmosHub from './components/CosmosHub'
import CosmosServices from './components/CosmosServices'
import AtomSecurity from './components/AtomSecurity'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <OfferHeader />
      <div className='bg-gradient-to-br from-black via-[#301934] to-orange-500/90'>
        <Navbar />
        <Home />
        <CosmosUniverse />
        <CosmosHub />
        <CosmosServices />
        <AtomSecurity />
        <Footer />
      </div>
    </>
  )
}

export default App
