import React, { useState, useEffect, useRef } from 'react';
import '../styles/Pomodro.css';
import Sidebar from './Sidebar';

const PomodoroTimer = () => {
  const audioRef = useRef(null);
  const visualizerRef = useRef(null);
  const intervalRef = useRef(null);
  const secondsCounter = useRef(0);

  const [mode, setMode] = useState('Pomodoro'); // Pomodoro, Short Break, Long Break
  const [isRunning, setIsRunning] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const defaultTimes = {
    Pomodoro: 25,
    'Short Break': 5,
    'Long Break': 15,
  };

  const [customTimes, setCustomTimes] = useState(defaultTimes);
  const [timeLeft, setTimeLeft] = useState(defaultTimes[mode] * 60);
  const [treesPlanted, setTreesPlanted] = useState(
    parseInt(localStorage.getItem('treesPlanted')) || 0
  );

  useEffect(() => {
    setTimeLeft(customTimes[mode] * 60);
    secondsCounter.current = 0;
  }, [mode, customTimes]);

  useEffect(() => {
    if (isRunning) {
      if (!isMuted) {
        audioRef.current.play();
        audioRef.current.loop = true;
      }

      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }

          secondsCounter.current += 1;

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
  }, [isRunning, isMuted]);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleCustomTimeChange = (type, value) => {
    const val = Math.max(1, Math.min(120, parseInt(value) || 1));
    setCustomTimes((prev) => ({ ...prev, [type]: val }));
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(customTimes[mode] * 60);
    secondsCounter.current = 0;
  };

  return (
    <>
      <Sidebar />
      <div className="pomodoro-container">
        <audio
          ref={audioRef}
          src="/music/lofi.mp3" // your imported music file
        />

        <div className="visualizer" ref={visualizerRef}>
          {[...Array(30)].map((_, i) => (
            <span key={i} className="bar"></span>
          ))}
        </div>

        <div className="timer-box">
          <h1>🍅 {mode}</h1>
          <h2>{formatTime(timeLeft)}</h2>

          <div className="mode-buttons">
            {['Pomodoro', 'Short Break', 'Long Break'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={mode === m ? 'active' : ''}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="controls">
            <label>
              {mode} Time:
              <input
                type="number"
                min="1"
                max="120"
                value={customTimes[mode]}
                onChange={(e) => handleCustomTimeChange(mode, e.target.value)}
              />
              min
            </label>

            <button onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => setIsMuted(!isMuted)}>
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </div>

          <div className="tree-stats">
            🌳 Trees Planted: <strong>{treesPlanted}</strong>
            <p className="advert">💚 1 min = 1 tree we plant</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroTimer;
