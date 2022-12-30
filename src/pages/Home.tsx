import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>hello World</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
    </div>
  );
}

export default Home;
