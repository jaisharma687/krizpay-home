// import { useState } from 'react'
import './App.css'
import OfferHeader from './components/OfferHeader'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CosmosUniverse from './components/CosmosUniverse'
import CosmosServices from './components/CosmosServices'
import Footer from './components/Footer'
import CosmosSdkSection from './components/CosmosSdkSection'
import BuildSection from './components/BuildSection'
import InterchainSection from './components/InterchainSection'
import CommunitySection from './components/CommunitySection'
import EnterCosmosSection from './components/EnterCosmosSection'
import CosmosBackground from './components/CosmosBackground'

function App() {

  return (
    <>
      <OfferHeader />
      <div className='bg-black'>
        <Navbar />
        <Home />
        <CosmosUniverse />
        <CosmosBackground>
          <CosmosServices />
        </CosmosBackground>
        <CosmosSdkSection />
        <BuildSection />
        <InterchainSection />
        <CommunitySection />
        <EnterCosmosSection />
        <Footer />
      </div>
    </>
  )
}

export default App
