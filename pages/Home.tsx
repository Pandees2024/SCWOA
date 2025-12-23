
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Map, Users, Bell, Star } from 'lucide-react';
import { mockNews, mockAmenities } from '../services/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const statsData = [
  { name: 'Villas', count: 120, color: '#3B82F6' },
  { name: 'Houses', count: 85, color: '#10B981' },
  { name: 'Vacant', count: 15, color: '#F59E0B' },
  { name: 'Parks', count: 4, color: '#8B5CF6' },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Residential Layout" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-500/30 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-6 border border-white/20">
              Welcome to Greenwood Layout
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              A Community Driven by <span className="text-blue-400">Harmony</span>
            </h1>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Official portal for the Elite Owners Association. Transparency, security, and community updates at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/layout" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
                Explore Layout Map <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition text-center">
                About Association
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Layout at a Glance</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Greenwood Layout spans over 40 acres of lush landscape, housing a mix of premium villas and modern independent houses. Our community thrives on well-planned infrastructure and top-tier maintenance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600 font-medium">Residential Units</div>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600">4</div>
                  <div className="text-gray-600 font-medium">Themed Parks</div>
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-gray-600 font-medium">Armed Security</div>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600">5km</div>
                  <div className="text-gray-600 font-medium">Walking Trails</div>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Community Composition</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                    {statsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Announcements</h2>
              <p className="text-gray-600">Stay updated with the latest happenings in our community.</p>
            </div>
            <Link to="/news" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All News <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockNews.map((news) => (
              <div key={news.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    news.category === 'EVENT' ? 'bg-purple-100 text-purple-700' : 
                    news.category === 'CIRCULAR' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{news.title}</h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">{news.content}</p>
                <button className="text-blue-600 font-bold flex items-center gap-2 group/btn">
                  Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">World-Class Amenities</h2>
            <p className="text-gray-600 text-lg">Designed to offer you a lifestyle of comfort, health, and luxury.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockAmenities.map((amenity) => (
              <div key={amenity.id} className="text-center p-10 rounded-3xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition group">
                <div className="inline-flex p-5 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  {/* Placeholder for Dynamic Icons */}
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{amenity.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
