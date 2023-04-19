
import './App.css';

import React from 'react';
// , { useState }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';
import './App.css';
import Signup from './pages/Signup';
export const AppContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;