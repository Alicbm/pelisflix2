import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Header } from './Header';
import { Footer } from './Footer';
import { Search } from './Search';
import { Description } from './Description';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/description' element={<Description />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
