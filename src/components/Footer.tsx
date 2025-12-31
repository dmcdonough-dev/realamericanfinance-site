import { Link } from 'react-router-dom';
import FlagIcon from './FlagIcon';

export default function Footer() {
  return (
    <footer className="relative text-gray-300 py-20 px-6 overflow-hidden border-t border-white/20">
      <div className="absolute inset-0 bg-cover bg-center"
           style={{
             backgroundImage: `linear-gradient(rgba(5,10,20,0.70), rgba(5,10,20,0.85)), url('/flag_distressed.jpg')`
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/frameworks" className="hover:text-white">Frameworks</Link></li>
            <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">Content</h3>
          <ul className="space-y-2">
            <li><Link to="/articles" className="hover:text-white">Articles</Link></li>
            <li><Link to="/podcasts" className="hover:text-white">Podcasts</Link></li>
            <li><Link to="/merch" className="hover:text-white">Merch</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-4">
          <div className="flex items-center space-x-3">
            <FlagIcon />
            <div className="flex flex-col leading-tight">
              <span className="brand-script text-white whitespace-nowrap">Real American Finance</span>
              <span className="brand-subtitle text-gray-400">DISCIPLINE • AUTONOMY • WEALTH</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-8.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6v6h-4v-5.3c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V21h-4z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4.5 12 4.5 12 4.5h-.1s-3.9 0-6.9.4c-.4 0-1.3.1-2.1.9C2.2 6.5 2 8 2 8S1.8 9.6 1.8 11.3v1.4C1.8 14.4 2 16 2 16s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.8.2 7.8.4 7.8.4s3.9 0 6.9-.4c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3zM10 14.7V9.3l5.2 2.7z"/>
              </svg>
            </a>
            <a href="#" aria-label="X" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h3l-7.5 8.5L22 22h-6l-4.5-6L7 22H2l7.5-8.5L2 2h6l4 5.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 text-center text-xs text-gray-400">
        &copy; 2025 Real American Finance. All rights reserved. Built with discipline, clarity, and long-term thinking.
      </div>
    </footer>
  );
}
