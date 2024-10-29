// src/pages/RecordWorkout.jsx
import React from 'react';
import WorkoutForm from '../components/WorkoutForm';

const RecordWorkout = ({ onAddWorkout }) => {
  return (
    <div className="record-workout">
      <h2>Record Your Workout</h2>
      <WorkoutForm onAddWorkout={onAddWorkout} />
    </div>
  );
};

export default RecordWorkout;
