import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Import components for routes
import Home from './page/Home';

import Food from "./page/Food"
import Resturants from './page/Resturants';
import Contact from './page/Contact';
import Quote from './page/Quote';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food/>} />
          <Route path="/quote" element={<Quote/>} />
          <Route path="/resturants" element={<Resturants/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
