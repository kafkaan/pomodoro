import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import ClassementPage from './ClassementPage';
import Admin from './Admin';
import {Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <section className='background-image'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/classements" element={<ClassementPage/>} />
          <Route exact path="/admin" element={<AdminPage/>} />
          <Route exact path="/score" element={<Admin/>} />
        </Routes>
      </section>
    </Router>
  );
}


export default App;
