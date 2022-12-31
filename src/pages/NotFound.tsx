import { Link } from 'react-router-dom';


import React from 'react';

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
    </div>
  );
}
