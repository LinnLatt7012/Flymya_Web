import React from 'react'
import "./App.css";
import FeaturedPromos from './components/FeaturedPromos';
import Navbar from './components/Navbar.js';
import TabNav from './components/TabNav';
import TextSection from './components/TextSection';


const App = () => {
  return (
    <div>
      <Navbar/>
      <TextSection />
      <FeaturedPromos />
      <TabNav />
    </div>
  );
}

export default App;
