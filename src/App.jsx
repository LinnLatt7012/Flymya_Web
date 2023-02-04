import React from 'react'
import "./App.css";
import FeaturedPromos from './components/FeaturedPromos';
import Navbar from './components/Navbar.js';
import TextSection from './components/TextSection';


const App = () => {
  return (
    <div>
      <Navbar/>
      <TextSection />
      <FeaturedPromos />
    </div>
  );
}

export default App;
