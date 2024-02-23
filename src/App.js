// App.js


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import MainPage from './pages/MainPage.js';
import Course from './pages/Course.js';
import Crime from './pages/Crime.js';
import Navbar from './components/NavbarAlt';
import Questions from './pages/Questions';
import SpinWheel from './pages/SpinWheel.js';
import Roulette from './pages/Roulette.js';
import Navigation from './pages/Navigation.js';
import ReactGA from 'react-ga';

ReactGA.initialize('G-SERJ5DC5CW');

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/spinwheel" element={<SpinWheel />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
};

export default App;


