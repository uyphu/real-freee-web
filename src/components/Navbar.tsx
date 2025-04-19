import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold text-green-600">REAL FREEE</Link>
    <div className="space-x-6 text-sm">
      <Link to="/browse" className="hover:text-green-600">Browse</Link>
      <Link to="/post" className="hover:text-green-600">Give Away</Link>
      <Link to="/login" className="hover:text-green-600">Login</Link>
    </div>
  </nav>
);

export default Navbar;
