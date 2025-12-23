
import React, { useState } from 'react';
import { User } from '../types';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  User as UserIcon, 
  Bell, 
  Download, 
  ChevronRight, 
  Send, 
  Loader2, 
  Users, 
  UserPlus,
  ShieldCheck,
  CheckCircle,
  Clock,
  MapPin,
  Lock,
  Phone
} from 'lucide-react';
import { askAssistant } from '../services/geminiService';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    plotNo: '',
    street: '',
    role: 'OWNER' as 'OWNER' | 'TENANT'
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const isAdmin = user.role === 'ADMIN';

  const handleAiAsk = async () => {
    if (!aiQuestion.trim()) return;
    setIsAsking(true);
    setAiResponse('');
    
    const context = `
      User: ${user.name}, Role: ${user.role}.
      Property ID: ${user.propertyId || 'N/A'}.
      Community Rules: No loud music after 10 PM. Garbage collection at 8 AM daily. AGM every May.
      Office Hours: 9 AM to 6 PM Mon-Sat.
    `;
    
    const response = await askAssistant(aiQuestion, context);
    setAiResponse(response || "Sorry, I couldn't process that.");
    setIsAsking(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false);
      setRegSuccess(true);
      setRegForm({
        name: '',
        email: '',
        password: '',
        phone: '',
        plotNo: '',
        street: '',
        role: 'OWNER'
      });
      setTimeout(() => setRegSuccess(false), 5000);
    }, 1500);
  };

  const Sidebar = () => (
    <div className="w-full lg:w-64 space-y-2">
      <button 
        onClick={() => setActiveTab('overview')}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
      >
        <LayoutDashboard size={20} /> Overview
      </button>
      
      {isAdmin && (
        <button 
          onClick={() => setActiveTab('users')}
          className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'users' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
        >
          <Users size={20} /> User Management
        </button>
      )}

      <button 
        onClick={() => setActiveTab('documents')}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'documents' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
      >
        <FileText size={20} /> Documents
      </button>
      <button 
        onClick={() => setActiveTab('support')}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'support' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
      >
        <MessageSquare size={20} /> AI Assistant
      </button>
      <button 
        onClick={() => setActiveTab('profile')}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'profile' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
      >
        <UserIcon size={20} /> My Profile
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <Sidebar />
        
        <div className="flex-grow space-y-8">
          {/* Header */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl uppercase shadow-inner">
                {user.name[0]}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <span className="bg-blue-50 px-2 py-0.5 rounded text-xs font-bold text-blue-600 border border-blue-100 uppercase tracking-tighter">{user.role} Portal</span>
                  • Logged in as Member
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="relative p-4 bg-gray-50 rounded-2xl text-gray-500 hover:text-blue-600 transition">
                <Bell size={24} />
                <span className="absolute top-3 right-3 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-12 w-[1px] bg-gray-100 mx-2 hidden md:block"></div>
              <div className="text-right hidden md:block">
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Community Status</div>
                <div className="text-xl font-bold text-green-600 flex items-center gap-2">
                  <ShieldCheck size={20} /> Healthy
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Bell className="text-blue-600" size={20} /> Latest Updates
                </h3>
                <div className="space-y-6">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition cursor-pointer group">
                      <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition">
                        {i}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900">Security Camera Installation in Street {i}</h4>
                        <p className="text-sm text-gray-500">Installation will take place between 10 AM - 4 PM...</p>
                      </div>
                      <ChevronRight className="self-center text-gray-300 group-hover:text-blue-600 transition" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="text-blue-600" size={20} /> Quick Documents
                </h3>
                <div className="space-y-4">
                  {['Association Bylaws 2024', 'AGM Minutes - April', 'Parking Rules'].map(doc => (
                    <div key={doc} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition">
                      <span className="font-medium text-gray-700">{doc}</span>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Download size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && isAdmin && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-blue-100 text-blue-600 rounded-3xl">
                    <UserPlus size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Register New Resident</h2>
                    <p className="text-gray-500">Account will be created in 'Pending' status and requires manual approval.</p>
                  </div>
                </div>

                {regSuccess && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-100 text-green-700 rounded-3xl flex items-center gap-4 animate-bounce">
                    <CheckCircle size={24} />
                    <span className="font-bold">Resident successfully registered! Approval notification sent to email.</span>
                  </div>
                )}

                <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="text" required placeholder="Resident Name" 
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={regForm.name} onChange={e => setRegForm({...regForm, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="email" required placeholder="resident@email.com" 
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={regForm.email} onChange={e => setRegForm({...regForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Temporary Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="password" required placeholder="••••••••" 
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={regForm.password} onChange={e => setRegForm({...regForm, password: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="tel" required placeholder="+91 00000 00000" 
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={regForm.phone} onChange={e => setRegForm({...regForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Plot Number</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="text" required placeholder="e.g. A-101" 
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={regForm.plotNo} onChange={e => setRegForm({...regForm, plotNo: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Street Name</label>
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                      value={regForm.street} onChange={e => setRegForm({...regForm, street: e.target.value})}
                    >
                      <option value="">Select Street</option>
                      <option value="Pine Street">Pine Street</option>
                      <option value="Oak Avenue">Oak Avenue</option>
                      <option value="Maple Road">Maple Road</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Resident Role</label>
                    <div className="flex gap-4">
                      <button 
                        type="button" onClick={() => setRegForm({...regForm, role: 'OWNER'})}
                        className={`flex-grow py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 border-2 ${regForm.role === 'OWNER' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200'}`}
                      >
                        <UserIcon size={18} /> Owner
                      </button>
                      <button 
                        type="button" onClick={() => setRegForm({...regForm, role: 'TENANT'})}
                        className={`flex-grow py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 border-2 ${regForm.role === 'TENANT' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200'}`}
                      >
                        <Users size={18} /> Tenant
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" disabled={isRegistering}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isRegistering ? <Loader2 className="animate-spin" /> : <><UserPlus /> Register & Send Activation Email</>}
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="text-amber-500" size={20} /> Pending Approvals (3)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Property</th>
                        <th className="pb-4">Role</th>
                        <th className="pb-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        { name: 'Michael Scott', prop: 'A-201', role: 'OWNER' },
                        { name: 'Pam Beesly', prop: 'B-105', role: 'TENANT' },
                        { name: 'Jim Halpert', prop: 'C-302', role: 'OWNER' },
                      ].map((p, idx) => (
                        <tr key={idx} className="group">
                          <td className="py-4 font-bold text-gray-700">{p.name}</td>
                          <td className="py-4 text-gray-500">{p.prop}</td>
                          <td className="py-4">
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold">{p.role}</span>
                          </td>
                          <td className="py-4 text-right">
                            <button className="text-blue-600 font-bold text-sm hover:underline">Approve Access</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
              <div className="p-6 bg-blue-600 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Elite AI Assistant</h3>
                  <p className="text-blue-100 text-sm">Ask about rules, maintenance, or layout details.</p>
                </div>
                <MessageSquare className="opacity-50" size={32} />
              </div>
              
              <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-gray-50/50">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">AI</div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-gray-700 border border-gray-100 leading-relaxed">
                    Hello {user.name}! I am your community assistant. How can I help you today? You can ask me things like "When is garbage collection?" or "What are the office timings?"
                  </div>
                </div>

                {aiResponse && (
                  <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 shrink-0">YOU</div>
                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-white leading-relaxed">
                      {aiQuestion}
                    </div>
                  </div>
                )}

                {aiResponse && (
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">AI</div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-gray-700 border border-gray-100 leading-relaxed">
                      {aiResponse}
                    </div>
                  </div>
                )}

                {isAsking && (
                  <div className="flex gap-3 items-center text-gray-400 animate-pulse">
                    <Loader2 className="animate-spin" size={20} />
                    <span>Gemini is thinking...</span>
                  </div>
                )}
              </div>

              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Type your question here..."
                    className="flex-grow px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAiAsk()}
                  />
                  <button 
                    onClick={handleAiAsk}
                    disabled={isAsking}
                    className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={24} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'documents' || activeTab === 'profile') && (
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center text-gray-400">
              <Loader2 className="animate-spin mx-auto mb-4" size={48} />
              <p className="text-xl">Loading Detailed {activeTab === 'documents' ? 'Member Archive' : 'Profile Settings'}...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
