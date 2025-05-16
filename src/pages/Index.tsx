
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchPanel from '@/components/SearchPanel';
import PopularDestinations from '@/components/PopularDestinations';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section with background image */}
      <div 
        className="relative bg-cover bg-center h-[400px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                           url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` 
        }}
      >
        {/* Search Panel */}
        <div className="absolute -bottom-24 left-0 right-0 px-4">
          <SearchPanel />
        </div>
      </div>
      
      {/* Popular Destinations */}
      <div className="mt-32">
        <PopularDestinations />
      </div>
      
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About Travelism</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Travel Destinations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Beach Destinations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mountain Getaways</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">City Breaks</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <p className="text-gray-300 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-700 rounded-l-md focus:outline-none text-white w-full"
                />
                <button className="bg-travel-blue px-4 py-2 rounded-r-md hover:bg-travel-light-blue transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Travelism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
