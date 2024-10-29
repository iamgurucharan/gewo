// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecordWorkout from './pages/RecordWorkout';
import Summary from './pages/Summary';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<RecordWorkout onAddWorkout={handleAddWorkout} />} />
        <Route path="/summary" element={<Summary workouts={workouts} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
