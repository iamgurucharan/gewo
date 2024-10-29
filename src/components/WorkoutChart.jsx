// src/components/WorkoutChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const WorkoutChart = ({ workouts }) => {
  const data = {
    labels: workouts.map((workout, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: 'Calories Burned',
        data: workouts.map((workout) => workout.calories),
        backgroundColor: 'rgba(108, 99, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Progress Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default WorkoutChart;
