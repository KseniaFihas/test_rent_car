import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Homepage.module.css';

function Homepage() {
    const navigate = useNavigate();

    const handleRedirect = () => {
    navigate('/catalog'); 
    };
    
    return (
        
        <div className={css.container}>
            <h1>
              Rent Car
                </h1> 
                <img src="/car.png" alt="Car" />
                 <button onClick={handleRedirect}>
Catalogue</button>
            </div>
            
    );
}

export default Homepage;