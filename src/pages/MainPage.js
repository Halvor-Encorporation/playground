import React, { useEffect } from 'react';
import ReactGA from 'react-ga';



import '../App.css';
import halvorImage from '../images/halvor.jpg'; // Add this line
import { Link } from 'react-router-dom';

const MainPage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <>
      <div className="App-body">
      <p>masse piss 
      </p>
        <h1>peteer</h1>
          <img src={halvorImage} className="App-logo" alt="Halvor" /> {/* Add this line */}
      </div>
    </>
  );
};

export default MainPage;
    ;
