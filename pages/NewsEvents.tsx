
import React from 'react';
import { Calendar, Bell, ChevronRight, Download } from 'lucide-react';
import { mockNews } from '../services/mockData';

const NewsEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Community News</h1>
            <p className="text-xl text-gray-500">Official circulars, upcoming events, and layout updates.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white px-6 py-3 rounded-2xl border border-gray-100 font-bold text-gray-600 hover:border-blue-600 transition flex items-center gap-2">
              <Download size={18} /> Download All 2024 Circulars
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {mockNews.map((item) => (
              <div key={item.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-xl transition group">
                <div className="md:w-32 shrink-0 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">{item.date.split('-')[2]}</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">MAY</div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                      item.category === 'EVENT' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg mb-6">{item.content}</p>
                  <button className="flex items-center gap-2 font-bold text-blue-600 group/btn">
                    View Circular Details <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200">
              <Calendar className="mb-6 opacity-50" size={48} />
              <h3 className="text-2xl font-bold mb-4">Event Calendar</h3>
              <p className="text-blue-100 mb-8">Click to view the full community calendar including maintenance schedules and garbage pick-up routines.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl hover:bg-blue-50 transition">
                Open Calendar View
              </button>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Bell className="text-blue-600" size={24} /> Important Alerts
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-2xl transition cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800">New Water Tank Cleaning Schedule</h4>
                      <p className="text-sm text-gray-400">Scheduled for this Saturday between...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
