import React from 'react';
import ReactGA from 'react-ga';
import {useState,useEffect} from 'react';
import fekteImage from '../images/fekting.jpg'; // Add this line
import courses from '../data/courses';
import { useLocation, useNavigate } from 'react-router-dom';
const Course = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const [currentCourse, setCurrentCourse] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Code to execute when 'section' changes
    const currentCourse = new URLSearchParams(window.location.search).get('c');
    setCurrentCourse(courses[currentCourse])
}, [location.pathname, location.search]);
  return (
    <div className="App-body">
        <h1>{currentCourse.title}</h1>
        <p>{currentCourse.description}</p>
        <img src={currentCourse.image} className="App-image" alt="Halvor" />
        <h3>Påmelding</h3>
        {currentCourse.signup ? (
             <iframe
              src={currentCourse.signup}
              width="70%"
              height="600"
              border= "3px solid black"
              marginheight="20%"
              marginwidth="0"
            >
              Loading…
           </iframe>
        ): (
          <p>Kommer snart!</p>
        )}

        </div>
  );
};

export default Course;
