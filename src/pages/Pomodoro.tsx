import { useState, useEffect } from 'react';
import { IconPlayerPause, IconTrash, IconPlayerPlay } from '@tabler/icons-react';
import '../styles/pomodoro.css';

export default function PomodoroPage() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [customValue, setCustomValue] = useState(25);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
      alert("¡Tiempo cumplido!");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSetTime = (m: number) => {
    setIsActive(false);
    setSeconds(m * 60);
  };

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro</h1>

      {/* Display del Reloj */}
      <div className="timer-display">
        <p className="timer-text">{formatTime(seconds)}</p>
      </div>

      {/* Tiempos Predeterminados */}
      <div className="controls-group">
        <button className="btn-custom" style={{backgroundColor: '#fff4e6', color: '#fd7e14'}} onClick={() => handleSetTime(25)}>Focus (25m)</button>
        <button className="btn-custom" style={{backgroundColor: '#e6fcf5', color: '#0ca678'}} onClick={() => handleSetTime(5)}>Short (5m)</button>
        <button className="btn-custom" style={{backgroundColor: '#e7f5ff', color: '#228be6'}} onClick={() => handleSetTime(15)}>Long (15m)</button>
      </div>

      {/* Tiempo Personalizado */}
      <div className="controls-group" style={{alignItems: 'flex-end'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
          <label style={{fontSize: '12px', color: '#868e96'}}>Minutos personalizados</label>
          <input 
            type="number" 
            className="input-custom"
            value={customValue} 
            onChange={(e) => setCustomValue(Number(e.target.value))}
            min="1"
          />
        </div>
        <button className="btn-custom" style={{backgroundColor: '#339af0', color: 'white'}} onClick={() => handleSetTime(customValue)}>Set</button>
      </div>

      {/* Controles Principales */}
      <div className="controls-group">
        <button 
          className="btn-custom" 
          style={{backgroundColor: isActive ? '#fab005' : '#40c057', color: 'white', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <IconPlayerPause /> : <IconPlayerPlay />}
        </button>

        <button 
          className="btn-custom" 
          style={{backgroundColor: 'transparent', border: '2px solid #fa5252', color: '#fa5252', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          onClick={() => { setIsActive(false); setSeconds(0); }}
          title="Tirar a la basura"
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
}