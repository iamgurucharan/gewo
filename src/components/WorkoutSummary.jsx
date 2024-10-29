// src/components/WorkoutSummary.jsx
import React from 'react';

const WorkoutSummary = ({ workouts }) => {
  const totalCalories = workouts.reduce((acc, workout) => acc + workout.calories, 0);
  const totalReps = workouts.reduce((acc, workout) => acc + workout.reps, 0);

  return (
    <div className="output-container">
      <h2 className="output-title">Workout Summary</h2>
      <div className="output-data">
        <p>Total Workouts: {workouts.length}</p>
        <p>Total Calories Burned: {totalCalories}</p>
        <p>Total Reps: {totalReps}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Reps</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.workout}</td>
              <td>{workout.reps}</td>
              <td>{workout.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutSummary;
