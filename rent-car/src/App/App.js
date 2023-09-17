import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Catalogepage from '../pages/Catalogepage/Catalogepage';
import Favoritespage from '../pages/Favoritespage';
import css from "./App.module.css";




function App() {
  return (
    <Router>
      <div className={css.App}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalogepage />} />
          <Route path="/favorites" element={<Favoritespage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





