import React from 'react';
import  './App.css'
import { Billing, Business, CTA, Clients, Footer, Hero, Navbar } from './components';




const App = () => {
  return (
    <section className='bg-black text-white'>
      <div className=''>
        <Navbar />

        
        <Hero />
        <Business />
        <Billing />
        <Clients />
        <CTA />
        <Footer />
      </div>

    </section>
  );
};

export default App;