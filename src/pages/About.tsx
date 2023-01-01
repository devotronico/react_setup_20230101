import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const myFunc = (a: number, b: number) => {
    return a + b;
  };

  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
      <p>{myFunc(1, '2')}</p>
    </div>
  );
}

export default About;
