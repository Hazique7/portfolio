import React from 'react';

import Cards from './Cards';
import './text.css';

const projects = [
  {
    title: 'Saylani Web',
    description: 'A website for Saylani Welfare Trust aimed at providing educational resources and information to students.',
    imageSrc: 'https://bytesfuture.com/wp-content/uploads/2020/10/web-app-1024x540-1.jpg',
    link: 'https://hazique7.github.io/WEB/'
  },
  {
    title: 'Digital Attendance System',
    description: 'A digital attendance system that uses local storage as a database. This system makes it easier for teachers to keep track of attendance records and for students to view their attendance history.',
    imageSrc: 'https://th.bing.com/th/id/OIP.LzlGp2-rX5vUiPLMNmnUjgHaEK?pid=ImgDet&w=1000&h=563&rs=1',
    link: 'https://hazique7.github.io/DIGITAL-ATTENDENCE-REGISTER/'
  },
  {
    title: 'E-Voting',
    description: 'A secure and reliable system for conducting electronic voting using C++.',
    imageSrc: 'https://worldofweirdthings.com/wp-content/uploads/evoting_1200.jpg',
    link: 'https://github.com/Hazique7/demo_Voting_machine.git'
  }
];

const TEXTBOX2 = () => {
  return (
    <div id='Projects' className='text-box'>
      <h3 className='text-box-title'>Projects</h3>
      <p className='text-box-description'>
        I have completed several projects that showcase my programming skills and abilities. These projects have not only helped me improve my technical skills but have also given me the opportunity to contribute to important causes and make a positive impact in my community.
      </p>
      <div className='card-container'>
        {projects.map((project, index) => (
          <a key={index} href={project.link} target='_blank' rel='noreferrer'>
            <Cards title={project.title} description={project.description} imageSrc={project.imageSrc} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TEXTBOX2;
