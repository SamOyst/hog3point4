/**
 * @file App.jsx
 * @authors
 *  Marko Ostrovitsa (A00448932),
 *  Sam Oystreck (A00478278),
 *  Daniel Johnston (A00450815),
 *  Piper Barbour (A00473078)
 *  ChatGPT
 * @description Root React component responsible for rendering the full application,
 * handling global dark mode state, and defining all routing between pages.
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import SiteMap from './components/Sitemap';
import Gallery from './components/gallery';
import Ecosystem from './components/Ecosystem;
import NaturalBurial from './components/NaturalBurial';
import Ecommerce from "./components/Ecommerce";
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Admin from './components/Admin';

/**
 * Main App component that initializes routing and manages dark mode state.
 *
 * @returns {JSX.Element} The rendered application.
 */
function App() {
  const [dark, setDark] = useState(false); // Controls global dark mode

  /**
   * Toggles the application's dark mode theme.
   *
   * @function
   * @returns {void}
   */
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <Router>
      {/* Background wrapper that updates color based on dark mode */}
      <div className="bg-yellow-100 dark:bg-blue-900 min-h-screen">
        
        {/* Navigation bar, receives dark mode props */}
        <Navigation toggleDarkMode={darkModeHandler} dark={dark} />

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Homepage dark={dark} />} />
          <Route path="/about" element={<About />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/naturalburial" element={<NaturalBurial />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
