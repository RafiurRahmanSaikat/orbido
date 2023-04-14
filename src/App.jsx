import React from 'react';
import './App.css'
import { Billing, Business, CTA, Clients, Footer, Hero, Navbar } from './components';

const App = () => {
  return (
    <section className='w-full overflow-hidden text-white bg-primary'>
      <div className=''>
        <Navbar />
        <Hero />
        <Business />
        <Billing />
        <Clients />
        <CTA/>
        <Footer />
      </div>

    </section>
  );
};

export default App;