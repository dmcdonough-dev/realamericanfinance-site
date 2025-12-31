import { Link } from 'react-router-dom';
import FlagIcon from './FlagIcon';

export default function Header() {
  return (
    <header className="bg-navy-900 text-white shadow-lg fixed w-full z-20 backdrop-blur border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <FlagIcon />
          <div className="flex flex-col leading-tight">
            <span className="brand-script text-white">Real American Finance</span>
            <span className="brand-subtitle text-gray-400">DISCIPLINE • AUTONOMY • WEALTH</span>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-crimson transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-crimson transition">About</Link></li>
          <li><Link to="/principles" className="hover:text-crimson transition">Principles</Link></li>
          <li><Link to="/frameworks" className="hover:text-crimson transition">Frameworks</Link></li>
          <li><Link to="/articles" className="hover:text-crimson transition">Articles</Link></li>
          <li><Link to="/podcasts" className="hover:text-crimson transition">Podcasts</Link></li>
          <li><Link to="/merch" className="hover:text-crimson transition">Merch</Link></li>
          <li><Link to="/resources" className="hover:text-crimson transition">Resources</Link></li>
          <li><Link to="/contact" className="hover:text-crimson transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
