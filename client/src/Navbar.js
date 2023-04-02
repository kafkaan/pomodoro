import React, { useState } from 'react';
import Taches from './Taches';

function Navbar() {
    const [showTaches, setShowTaches] = useState(false);

    const handleTachesClick = () => {
        setShowTaches(!showTaches);
    };

    return (
        <div className="Navbar">
            <div className="nav">
                <span className="logo">Pomodro</span>
                <ul className='navul'>
                    <li className='navli'>Services</li>
                    <li className='navli'>Acceuil</li>
                    <li className='navli' onClick={handleTachesClick}>Taches</li>
                </ul>
                <button className="contact">Contact</button>
            </div>
             <Taches state = {showTaches} />
        </div>
    );
}

export default Navbar;
