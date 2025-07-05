import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/skills">Skills</Link> |{' '}
      <Link to="/projects">Projects</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;