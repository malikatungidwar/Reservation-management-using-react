import React from "react";

const About = () => {
  return (
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid" >
            Welcome to Foody Fresh, where culinary passion meets effortless dining. We're your go-to destination for discovering and booking reservations at top-notch restaurants with ease. Say goodbye to dining dilemmas and hello to seamless experiences, all at your fingertips. Join our community of food enthusiasts, and let's embark on a delicious journey together.Indulge in the flavors of your city's vibrant culinary scene, from cozy bistros to elegant fine dining establishments. With our intuitive platform, finding the perfect spot for any occasion is a breeze. Join us and elevate your dining adventures today!

            </p>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
  );
};

export default About;
