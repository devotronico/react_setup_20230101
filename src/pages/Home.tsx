import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
      <p>sito creato da Daniele Manzi nel 2023</p>
    </div>
  );
}

export default Home;
