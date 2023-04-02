import React, { useState,useEffect } from 'react';
import './App.css';


function Admin({onSubmit }) {
  const [athleteName, setAthleteName] = useState('');
  const [athletes, setAthletes] = useState([]);
  
  const [testName, setTestName] = useState('');
  const [tests, setTests] = useState([]);


  const [score, setScore] = useState('');
  

  useEffect(() => {
    fetch('/api/scores')
    
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        for(let i = 0 ; i < data.length ; i++){
          setTests(prevState => {
            // Use the spread operator to create a new array that includes the previous things and a new thing
            return [...prevState, data[i].name]
        })}
       const myathletes = Object.keys(data[0].score);
       setAthletes(myathletes)
      });
  },[]);
  
  
  
  function handleSubmit(event) {
    event.preventDefault();
   
    console.log(athleteName)
   
    
  
    fetch('/api/scores', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nametest: testName, name: athleteName, score: score}),
     
    })
      .then((response) => {
        if (response.ok) {
          console.log("Score submitted");
          setAthleteName("");
          setScore("");
        } else {
          console.error("Error submitting score");
        }
      })
      .catch((err) => {
        console.error("Error submitting score", err);
      });
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Athlète:
        <select className="athlete-select" value={athleteName} onChange={event => setAthleteName(event.target.value)}>
          <option value="">Sélectionnez un athlète</option>
          {athletes.map((athlete, index) => (
            <option key={index} value={athlete}>{athlete}</option>
          ))}
        </select>
        <select className="test-select" value={testName} onChange={event => setTestName(event.target.value)}>
          <option value="">Sélectionnez un Epreuve</option>
          {tests.map((test, index) => (
            <option key={index} value={test}>{test}</option>
          ))}
        </select>
      </label>
      <label>
        Score:
        <input className="score-input" type="number" value={score} onChange={event => setScore(event.target.value)} />
      </label>
      <button className="submit-button" type="submit">Soumettre</button>
    </form>
  );
}

export default Admin;
