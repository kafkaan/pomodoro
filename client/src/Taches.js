
import React, { useState } from 'react';







function Taches(props) {
  const [todos, setTodos] = useState([]);  // les taches va contenir les elments a faire avec un biblitoheque chacun text si c'est completé ou pas et le jour
  const [inputValue, setInputValue] = useState('');  //c'est la velur mise par l'utilisateur en gros ca va changer en fonction de ce qu'il va ecrire 
  const [taskCount, setTaskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [date, setDate] = useState(''); // État pour la date


  function handleSubmit(event) { //on met a jour le tableau grace a cette fonctuon 
    event.preventDefault();
    
    if(inputValue.length>0){
      if(date.length>0){
        if(inputValue.length>0){
      setTodos([...todos, { text: inputValue, isCompleted: false , date:date}]); //on met a jour a chauqe validation de form le tableau des elements 
      setInputValue('');
      setTaskCount(taskCount + 1);

      
  }}}}

  function handleChange(event) {  //On modifie le input value 
    setInputValue(event.target.value);
  }

  function handleDelete(index) { //On supprime la tache en fonction de l'index 
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleCheck(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    setCompletedCount(completedCount + (newTodos[index].isCompleted ? 1 : -1));
  }



  return (
    <div className={`taches ${props.state? 'visible' : 'hidden'}`}>
      <h1  className="todoh1">Todo List</h1>
      <div className='taskbar'>
      <form onSubmit={handleSubmit} className='taskbar'>
      <input
        type="text"
        value={inputValue}
        onChange = {handleChange}
        placeholder="Ajouter une tâche"
        className = 'taskput'
      />
      <input
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          className = 'taskput'
        />
      <button className='todobutton' type="submit">Add</button>
    </form>
      </div>
      <ul>
      {todos.map((todo, index) => (
        <li key={index} className='list-container'>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleCheck(index)}
            className="checktask"
          />
          <div className='tasks'>
          <span className='tasktodo' style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <span className='' style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.date}
          </span>
          </div>
          
          <button type="" className='deletebutton' onClick={() => handleDelete(index)}>
            Supprimer
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Taches;
