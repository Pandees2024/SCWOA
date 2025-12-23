
import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-500">We are here to help you. Reach out to the association office or send us a digital message.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-500">+91 98765 43210</p>
                <p className="text-gray-500">+91 044 1234 5678</p>
              </div>
              <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-500">admin@elitefoa.com</p>
                <p className="text-gray-500">grievance@elitefoa.com</p>
              </div>
            </div>

            <div className="p-10 bg-blue-600 rounded-[3rem] text-white flex gap-8 items-start shadow-2xl shadow-blue-200">
              <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Monday — Saturday: 09:00 AM - 06:00 PM<br />
                  Sunday: Closed (Available for Emergency Only)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="text-blue-600" /> Physical Address
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                Elite FOA Community Office, Phase 1, Main Entrance,<br />
                Greenwood Layout, Sector 12, Bangalore - 560100
              </p>
              <div className="aspect-video bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-inner group">
                 <iframe 
                    title="Layout Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750584285189!2d77.6322!3d12.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146191402ad5%3A0x633f677b06385966!2sElite!5e0!3m2!1sen!2sin!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                  ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-500 mb-10">Use this form for non-emergency inquiries or general suggestions.</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Plot / House No</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="A-101" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select className="w-auto px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option>Maintenance Request</option>
                  <option>Security Concern</option>
                  <option>Suggestion</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Tell us how we can help..."></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition group">
                Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
