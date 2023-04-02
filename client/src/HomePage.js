import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const competitionDate = new Date('2023-04-23T08:00:00');
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = competitionDate - now;

      if (diff < 0) {
        clearInterval(intervalId);
        setCountdown('La compétition a déjà commencé !');
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${days} :  ${hours} : ${minutes}: ${seconds < 10 ? '0' : ''}${seconds}`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      
      <nav className="navbar">

        <ul className="nav-list">
        {countdown && (
            <li className="nav-item">
              <p className="hour-link">{countdown}</p>
            </li>
          )}
          <li className="nav-item">
            <Link to="/classements" className="nav-link">Classement Génerale</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin</Link>
          </li>
          <li className="nav-item">
            <Link to="/class1" className="nav-link">Classement 1e epreuve</Link>
          </li>
          <li className="nav-item">
            <Link to="/class2" className="nav-link">Classement 2 Epreuve </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default HomePage;
