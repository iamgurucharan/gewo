// src/components/WorkoutForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../pages/RecordWorkout.css';

const RecordWorkout = ({ onAddWorkout }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [targetCalories, setTargetCalories] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [feedback, setFeedback] = useState('');
  const videoRef = useRef(null);

  const recordingDuration = 1000 * 1000; // 10 seconds

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks((prev) => [...prev, event.data]);
          }
        };

        recorder.onstop = () => {
          const blob = new Blob(recordedChunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          setVideoURL(url);
          onAddWorkout({
            exerciseType,
            targetCalories,
            heartRate,
            feedback,
            videoURL: url,
            calories: Math.round((recordedChunks.length * 5) / 60), // Example calorie calculation
          }); // Add workout details
        };

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    getMedia();

    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaRecorder]);

  const handleStartRecording = () => {
    setRecordedChunks([]);
    mediaRecorder.start();
    setIsRecording(true);

    setTimeout(() => {
      mediaRecorder.stop();
      setIsRecording(false);
    }, recordingDuration);
  };

  return (
    <div className="record-workout-container">
      <h1>Record Your Workout</h1>
      <div className="video-container">
        <video ref={videoRef} autoPlay muted />
      </div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        {isRecording ? 'Recording...' : 'Start Recording'}
      </button>

      <div className="input-section">
        <h3>Workout Details</h3>
        <label>
          Exercise Type:
          <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} placeholder="e.g., Running" />
        </label>
        <label>
          Target Calories:
          <input type="number" value={targetCalories} onChange={(e) => setTargetCalories(e.target.value)} placeholder="e.g., 500" />
        </label>
        <label>
          Heart Rate (bpm):
          <input type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} placeholder="e.g., 120" />
        </label>
        <label>
          Feedback:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Share your thoughts..." />
        </label>
      </div>

      {videoURL && (
        <div className="output-section">
          <h2>Processed Output</h2>
          <video controls src={videoURL} className="recorded-video" />
          <p>Your video has been recorded and processed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default RecordWorkout;
