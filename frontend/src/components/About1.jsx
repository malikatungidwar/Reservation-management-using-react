import React from "react";
import { Link } from 'react-router-dom';
import Home1 from '../Pages/Home1';

const About = () => {
  return (
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">DATA ANALYTICS</h1>
            </div>
            <p className="mid">
            In this project, data analytics underpins the inventory management application by predicting next week's sales based on historical data. This enables restaurant managers to make informed stocking decisions. A sales line graph visually displays these predictions, highlighting trends and expected fluctuations in demand. This visual representation aids in understanding sales patterns and supports proactive inventory adjustments, ultimately enhancing operational efficiency in a dynamic restaurant environment.</p>
          </div>
          <div className="banner">
            <Link to="/Home1" style={{ 
                  width: '650px', /* Adjust width for a smaller image */
                  height: 'auto', /* Maintain aspect ratio */
                  border: 'none', /* Remove border */
                  // display: 'block', /* Center the image */
                  margin: '0 auto',
                }} >
              <img 
                src="/about1.png" 
                alt="about" 
                
              />
            </Link>
          </div>
        </div>
      </section>
  );
};

export default About;
