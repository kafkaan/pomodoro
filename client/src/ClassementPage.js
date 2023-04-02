import React, { useState,useEffect } from 'react';


function ClassementPage() {

    const [athleteName, setAthleteName] = useState('');
    const [athletes, setAthletes] = useState([]);
    
    const [testName, setTestName] = useState('');
    const [tests, setTests] = useState([]);

    const[scores,setScores] = useState([]);

    useEffect(() => {
        fetch('/api/scores')
        
          .then(response => response.json())
          .then(data =>{
           
            for(let i = 0 ; i < data.length ; i++){
              setTests(prevState => {
                // Use the spread operator to create a new array that includes the previous things and a new thing
                return [...prevState, data[i].name]
            })}
           const myathletes = Object.keys(data[0].score);
           setAthletes(myathletes)
  
  
           for(let i = 0 ; i < data.length ; i++){
              scores.push(data[i].score)}
            
          
          });
          
          
      },[]);
      console.log(scores.length)
      const somme = {}

      for(let i = 0 ; i<scores.length ; i++){
        for (const prop in scores[i]){
            console.log(prop)
            if(prop in somme === true) {
                console.log(somme[prop])
                somme[prop  ]= somme[prop] + parseInt(scores[i][prop])
                
            } else {
                console.log("not yet")
                somme[prop] = parseInt(scores[i][prop])
            }
        }
     
      }
     console.log(somme)
  
     const sortedAthletes = Object.entries(somme)
     .sort(([, scoreA], [, scoreB]) => scoreA - scoreB)
     .map(([athlete, score], index) => ({ position: index+1, athlete, score }));

 return (
     <div className="classement">
         <h1>Classement</h1>
         <table>
             <thead>
                 <tr>
                     <th>Position</th>
                     <th>Athlète</th>
                     <th>Score total</th>
                 </tr>
             </thead>
             <tbody>
                 {sortedAthletes.map(({ position, athlete, score }) => (
                     <tr key={athlete}>
                         <td>{position}</td>
                         <td>{athlete}</td>
                         <td>{score}</td>
                     </tr>
                 ))}
             </tbody>
         </table>
     </div>
 );
}

export default ClassementPage;