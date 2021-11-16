import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learn from './components/Learn';
import Courses from './components/Courses';
import Home from './components/Home';
import CoursesName from './CoursesName';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/success' element={<Success />} />

        <Route path='/courses' element={<Courses />} />

        <Route path='/courses/:coursename' element={<CoursesName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
