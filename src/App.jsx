import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Register from './pages/register/Register';
import Categories from './pages/categories/Categories';
import Homepage from './pages/homepage/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/homepage' element = {<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
