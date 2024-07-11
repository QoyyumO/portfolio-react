import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Portfolio from './components/Portfolio'
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Portfolio />} />
          <Route path="/projects" element={<Slider />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
