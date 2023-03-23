import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Header } from './Header';
import { Footer } from './Footer';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
