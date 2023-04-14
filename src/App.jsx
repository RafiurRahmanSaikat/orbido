import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Business from './components/Business';
import Clients from './components/Clients';
import Billing from './components/Billing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <section className='min-h-screen  bg-black  text-white'>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <Clients />
      <CTA/>
      <Footer/>
    </section>
  );
};

export default App;