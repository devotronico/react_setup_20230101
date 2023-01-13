import { Link } from 'react-router-dom';
import './home.css';

export function Home() {
  return (
    <div className='home demo'>
      <h1>Hello World</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
      <p className='text'>
        <span>sito creato da </span>
        <span className='name'>Daniele Manzi</span>
        <span> nel 2023</span>
      </p>
    </div>
  );
}
