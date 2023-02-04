import React from 'react';
import "./About.css";
import aboutImg from "../../images/aboutBg.jpeg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>This book library application a search of all kinds of books and novels be it fiction, non fiction or academical books. Also gives a summary about each book and the subject and authors of the book. This is a perfect application for all the book lovers. </p>
            <p className='fs-17'> This application is developed by using the public Books API and is a react project.</p>
            <p className='fs-17'> K Rupini Sindhu Priyanka</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About