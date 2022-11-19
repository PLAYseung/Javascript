import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/Event';
import Home from './pages/Home';
import HowUse from './pages/HowUse';
import MyPage from './pages/MyPage';
import Service from './pages/Service';
import Support from './pages/Support';
import Login from './pages/Login';

export default () => {
    return(
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Event' element={<Event />} />
          <Route path='/HowUse' element={<HowUse />} />
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    )
}

