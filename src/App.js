import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Career from './component/detail/career';
import Health from './component/detail/health';
import Love from './component/detail/love';
import Money from './component/detail/money';
import Home from './containers/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/love' element={<Love />} />
      <Route path='/detail/career' element={<Career />} />
      <Route path='/detail/health' element={<Health />} />
      <Route path='/detail/money' element={<Money />} />
      <Route path='*' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
