import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Search from './page/Search';

const App = ()=> {
    return (
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    );
}

export default App;
