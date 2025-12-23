
import React, { useState } from 'react';
import { Search, Home, Map as MapIcon, Filter, Info, User, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { mockProperties } from '../services/mockData';

const PropertyLayout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'VILLA' | 'HOUSE'>('ALL');

  const filteredProperties = mockProperties.filter(p => {
    const matchesSearch = p.plotNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'ALL' || p.type === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'OCCUPIED_OWNER':
        return <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
          <CheckCircle size={12} /> Occupied (Owner)
        </span>;
      case 'OCCUPIED_TENANT':
        return <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
          <Clock size={12} /> Occupied (Tenant)
        </span>;
      case 'VACANT':
        return <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
          <AlertTriangle size={12} /> Vacant
        </span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-600 pt-20 pb-40 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Interactive Community Map</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Easily locate villas, houses, and amenities across our 40-acre residential layout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24">
        {/* Map Visualization Placeholder */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-12 border border-blue-100 overflow-hidden">
          <div className="aspect-[21/9] bg-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000" 
              alt="Layout Map" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm group-hover:blur-none transition-all duration-700"
            />
            <div className="relative z-10 text-center p-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-100">
                <MapIcon className="mx-auto text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive 2D Map Loading...</h3>
                <p className="text-gray-500 mb-6">High-resolution street-wise navigation Coming Soon.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Open SVG Viewer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Search */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search Plot No or Owner Name..." 
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex p-1 bg-gray-50 rounded-2xl border border-gray-100">
              <button 
                onClick={() => setFilter('ALL')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition ${filter === 'ALL' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('VILLA')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition ${filter === 'VILLA' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Villas
              </button>
              <button 
                onClick={() => setFilter('HOUSE')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition ${filter === 'HOUSE' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Houses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map(prop => (
              <div key={prop.id} className="group p-6 rounded-3xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                    <Home size={24} />
                  </div>
                  <span className="text-sm font-bold text-gray-400">{prop.type}</span>
                </div>
                
                <h4 className="text-2xl font-bold mb-1 text-gray-900">{prop.plotNo}</h4>
                <p className="text-gray-500 text-sm mb-6 font-medium">{prop.street}</p>
                
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl">
                  <div className="p-1.5 bg-white rounded-lg border border-gray-100">
                    <User size={16} className="text-gray-400" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Owner</div>
                    <div className="text-sm font-bold text-gray-700 truncate">{prop.ownerName}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {getStatusBadge(prop.status)}
                  <button className="w-full mt-2 py-3 rounded-xl border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition flex items-center justify-center gap-2">
                    <Info size={14} /> Full Details
                  </button>
                </div>
              </div>
            ))}
            
            {filteredProperties.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400">
                <Search size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-lg">No properties match your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;
