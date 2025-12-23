
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Info, Users, Image, Mail, Layout as LayoutIcon, LogIn, LogOut, Settings, Bell, ChevronRight, Menu, X, ShieldCheck } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import PropertyLayout from './pages/PropertyLayout';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('foa_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('foa_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('foa_user');
  };

  const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600';

    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <ShieldCheck className="text-white h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-gray-800">EliteFOA</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`px-1 py-5 text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
              <Link to="/about" className={`px-1 py-5 text-sm font-medium transition-colors ${isActive('/about')}`}>About</Link>
              <Link to="/layout" className={`px-1 py-5 text-sm font-medium transition-colors ${isActive('/layout')}`}>Layout</Link>
              <Link to="/news" className={`px-1 py-5 text-sm font-medium transition-colors ${isActive('/news')}`}>News</Link>
              <Link to="/contact" className={`px-1 py-5 text-sm font-medium transition-colors ${isActive('/contact')}`}>Contact</Link>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <Link to="/dashboard" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 transition">
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg">
                  Member Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About Us</Link>
              <Link to="/layout" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Layout Map</Link>
              <Link to="/news" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">News & Events</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</Link>
              {user ? (
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Dashboard</Link>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600">Login</Link>
              )}
            </div>
          </div>
        )}
      </nav>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-blue-400 h-8 w-8" />
              <span className="text-2xl font-bold">EliteFOA</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to maintaining excellence, transparency, and community well-being in our residential layout.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/layout" className="hover:text-blue-400 transition">Interactive Layout</Link></li>
              <li><Link to="/news" className="hover:text-blue-400 transition">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Get in Touch</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Bylaws (PDF)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Meeting Minutes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Grievance Form</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Emergency Contacts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-4">
              <p>Elite FOA Office, Phase 1</p>
              <p>Greenwood Layout, Sector 12</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: admin@elitefoa.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Elite Owners Association. All Rights Reserved. Built with Gemini AI.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/layout" element={<PropertyLayout />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
