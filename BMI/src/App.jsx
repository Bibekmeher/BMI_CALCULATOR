import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [category,setCategory]=useState('');
  const [color,setColor]=useState('');
  let bmi;

  const calculateBMI = () => {
    if (weight === '' && height === '') {
      toast.error('Please enter both weight and height.');
      return;
    }
      else if(weight===''){
        toast.error('Please enter weight');
        return;
      }
      else if(height===''){
        toast.error('Please enter height');
        return;
      }
     else{
     bmi = weight / ((height) * (height)); 
    setBmiResult(bmi.toFixed(2));}
   
    if(bmi<18.5){
      console.log(1);
      setCategory('Underweight');
      setColor("red");
    }
    else if(bmi>=18.5 && bmi<=24.9){
      console.log(2);
      setCategory('Normal');
      setColor("Green");
    }
    else if(bmi>=25 && bmi<=29.9){
      console.log(3);
       setCategory("OverWeight");
       setColor("orange");
    }
    else{
      console.log(4);
      setCategory("Obesity");
      setColor("red");
    }
  
  };

  

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmiResult('');
    setCategory('');
    setColor('');
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="card">
        <h2 className="heading">BMI Calculator</h2>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input-field"
        />
        <br />
        <input
          type="number"
          placeholder="Height (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input-field"
        />
        <br />
        <button onClick={calculateBMI} className="btn submit-btn">Submit</button>
        <button onClick={resetFields} className="btn reload-btn">Reload</button>
        <p className="result">{bmiResult && `Your BMI is: ${bmiResult}`}</p>
        <p className="result">{category && `Category :${category}`}</p>
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default App;
