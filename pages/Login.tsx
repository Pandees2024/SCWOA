
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { mockUsers } from '../services/mockData';
import { User } from '../types';

interface LoginProps {
  onLogin: (u: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser) {
        onLogin(foundUser);
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Try admin@example.com, john@example.com or rob@example.com');
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-blue-600 rounded-3xl text-white mb-6 shadow-xl shadow-blue-200">
              <ShieldCheck size={48} />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Member Portal</h1>
            <p className="text-gray-500">Log in to manage your property and stay updated.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-2xl flex items-center gap-3 text-sm animate-shake">
              <AlertCircle size={20} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <button type="button" className="text-xs text-blue-600 font-bold hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? <Loader2 className="animate-spin" size={24} /> : (
                <>Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">Not registered yet?</p>
            <button className="text-blue-600 font-bold hover:underline mt-1">Contact Office for Access</button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-gray-400 text-xs">
          Secure access protected by EliteFOA Multi-Layer Encryption.
        </p>
      </div>
    </div>
  );
};

export default Login;
