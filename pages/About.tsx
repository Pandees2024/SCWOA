
import React from 'react';
import { Target, Eye, ShieldCheck, Trophy, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const bearers = [
    { role: 'President', name: 'Dr. Ramesh Kumar', bio: 'Resident of Villa A-01. Retired Civil Engineer with 30 years experience.' },
    { role: 'Secretary', name: 'Mrs. Shanthi Priya', bio: 'Resident of Villa C-12. Dedicated social worker and community lead.' },
    { role: 'Treasurer', name: 'Mr. Vivek Anand', bio: 'Resident of House B-45. Chartered Accountant ensuring financial transparency.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="About Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Our Association</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, Elite Owners Association (FOA) represents over 200 households committed to safe, sustainable, and peaceful living.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="shrink-0 h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional facility management and enhance property values while fostering a strong sense of community through transparent governance.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 h-16 w-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the model residential layout association in the region, recognized for innovation, safety, and resident satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200" alt="Community Park" />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Office Bearers (2024-2026)</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bearers.map((bearer, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:shadow-xl transition text-center group">
              <div className="h-32 w-32 bg-white rounded-full mx-auto mb-8 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center text-4xl font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                {bearer.name[0]}
              </div>
              <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">{bearer.role}</div>
              <h3 className="text-2xl font-bold mb-4">{bearer.name}</h3>
              <p className="text-gray-500 leading-relaxed italic">"{bearer.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
