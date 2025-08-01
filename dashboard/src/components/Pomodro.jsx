import React, { useState, useEffect, useRef } from 'react';
import '../styles/Pomodro.css';
import Sidebar from './Sidebar';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [customTime, setCustomTime] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [treesPlanted, setTreesPlanted] = useState(
    parseInt(localStorage.getItem('treesPlanted')) || 0
  );

  const audioRef = useRef(null);
  const visualizerRef = useRef(null);
  const secondsCounter = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      audioRef.current.play();
      audioRef.current.loop = true;

      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }

          secondsCounter.current += 1;

          // For every 60 seconds passed, plant a tree
          if (secondsCounter.current % 60 === 0) {
            const newCount = treesPlanted + 1;
            localStorage.setItem('treesPlanted', newCount);
            setTreesPlanted(newCount);
          }

          return prev - 1;
        });
      }, 1000);
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleTimeChange = (e) => {
    const mins = Math.max(1, Math.min(120, parseInt(e.target.value) || 1));
    setCustomTime(mins);
    setTimeLeft(mins * 60);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(customTime * 60);
    secondsCounter.current = 0;
  };

  return (
<>
<Sidebar />
    <div className="pomodoro-container">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2023/04/10/audio_4f7f515b81.mp3?filename=lofi-study-112191.mp3"
      />

      <div className="visualizer" ref={visualizerRef}>
        {[...Array(20)].map((_, i) => (
          <span key={i} className="bar"></span>
        ))}
      </div>

      <div className="timer-box">
        <h1>🍅 Pomodoro</h1>
        <h2>{formatTime(timeLeft)}</h2>

        <div className="controls">
          <input
            type="number"
            min="1"
            max="120"
            value={customTime}
            onChange={handleTimeChange}
          />
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>

        <div className="tree-stats">
          🌳 Trees Planted: <strong>{treesPlanted}</strong>
          <div className="tree-grow" />
        </div>
      </div>
    </div>
</>
  );
};

export default PomodoroTimer;
