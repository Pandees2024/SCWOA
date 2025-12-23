
import React, { useState } from 'react';
import { User } from '../types';
import { LayoutDashboard, FileText, MessageSquare, User as UserIcon, Bell, Download, ChevronRight, Send, Loader2 } from 'lucide-react';
import { askAssistant } from '../services/geminiService';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAsking, setIsAsking] = useState(false);

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

  const Sidebar = () => (
    <div className="w-full lg:w-64 space-y-2">
      <button 
        onClick={() => setActiveTab('overview')}
        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white'}`}
      >
        <LayoutDashboard size={20} /> Overview
      </button>
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
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-bold text-gray-600">{user.role}</span>
                  • Logged in from Portal
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
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Maintenance Dues</div>
                <div className="text-xl font-bold text-green-600">Paid (May 2024)</div>
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
