import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@components/Navbar';

import Home from '@pages/Home';
import Characters from '@pages/Characters';
import Game from '@pages/Game';

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/game' element={<Game />} />

      </Routes>
    </BrowserRouter>
  )

}