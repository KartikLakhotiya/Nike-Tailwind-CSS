import { useState, useEffect } from 'react';
import './App.css';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from './sections';
import Navbar from './components/Navbar';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main className={`relative ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <section className='footer'>
        <Hero />

        <section className='padding '>
          <PopularProducts />
        </section>

        <section className='padding '>
          <SuperQuality />
        </section>

        <section className='padding-x py-10'>
          <Services />
        </section>

        <section className='padding '>
          <SpecialOffer />
        </section>

        <section className='bg-pale-blue padding'>
          <CustomerReviews />
        </section>

        <section className='padding-x sm:py-32 py-16 w-full '>
          <Subscribe />
        </section>

        <section className='bg-black padding-x padding-t pb-8 footer'>
          <Footer />
        </section>
      </section>
    </main>
  )
}

export default App;
