import React, { useState } from 'react';
import Card from './components/Card'; 
import './App.css'; 

function App() {
  const [isOn, setIsOn] = useState(false); 

  const handleToggle = () => {
    setIsOn(prev => {
      const newState = !prev;
      console.log(`System turned ${newState ? 'ON' : 'OFF'}`);
      return newState;
    });
  };

  const sensorData = {
    temperature:13,
    humidity: 55,
    co2: 400,
    light: 750,
  };

  return (
    <div className="app-container">
      <h1>Environment Monitor Dashboard</h1>

      <div className="card-grid">
        <Card title="Temperature" value={`${sensorData.temperature} °C`} isOn={isOn} />
        <Card title="Humidity" value={`${sensorData.humidity} %`} isOn={isOn} />
        <Card title="CO₂" value={`${sensorData.co2} ppm`} isOn={isOn} />
        <Card title="Light" value={`${sensorData.light} lux`} isOn={isOn} />
      </div>

      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <span className="switch-label">{isOn ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}

export default App;