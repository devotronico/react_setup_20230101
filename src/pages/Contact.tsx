import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
      <p>3331060655</p>
      <p>ciao</p>
    </div>
  );
}
