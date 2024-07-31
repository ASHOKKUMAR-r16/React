
import React, { useState } from 'react';
import './Bmi.css'

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / ((height / 100) * 2));
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const bmiCategory = () => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else if (bmi >= 30) {
      return 'Obesity';
    } else {
      return '';
    }
  };

  return (
    <body className='g'>
    <center>
    <div className="App">
      <h1 className='z'>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg): </label>
        <input type="" value={weight} onChange={handleWeightChange} />
      </div>
      <div className="input-group">
        <label>Height (cm): </label>
        <input type="" value={height} onChange={handleHeightChange} />
      </div>
      
      <button onClick={calculateBMI} id='vc'>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {Math.round(bmi)}</h2>
          <h2>Category: {bmiCategory()}</h2>
        </div>
      )}
    </div>
    
    
    
    </center>
    </body>
  
  );
}


export default App;
