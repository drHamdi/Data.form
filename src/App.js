import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Data from './components/data/Data' ;
import Cloud from './components/cloud/CLoud';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    < Navbar />
      < Hero />
      < Data />
      < Cloud />
      < Footer />
     </>
  );
}

export default App; 
