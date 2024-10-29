// src/pages/Summary.jsx
import React from 'react';
import WorkoutSummary from '../components/WorkoutSummary';
import WorkoutChart from '../components/WorkoutChart';

const Summary = ({ workouts }) => {
  return (
    <div className="summary">
      <h2>Workout Summary</h2>
      <WorkoutSummary workouts={workouts} />
      <WorkoutChart workouts={workouts} />
    </div>
  );
};

export default Summary;
