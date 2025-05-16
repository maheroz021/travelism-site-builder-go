
import React from 'react';
import { Plane, HomeIcon, Calendar, Map, Train, Bus, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Logo and Top Navigation */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-travel-blue">
              travel<span className="text-travel-accent font-black">ism</span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-sm text-gray-600 hover:text-travel-blue">My Trips</button>
            <button className="text-sm text-gray-600 hover:text-travel-blue">Login or Create Account</button>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-600">INR</span>
              <span className="text-sm text-gray-600">|</span>
              <span className="text-sm text-gray-600">English</span>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex justify-center">
          <ul className="flex overflow-x-auto pb-1 px-4">
            <NavItem icon={<Plane size={20} />} label="Flights" />
            <NavItem icon={<HomeIcon size={20} />} label="Hotels" />
            <NavItem icon={<HomeIcon size={20} />} label="Homestays & Villas" active />
            <NavItem icon={<Calendar size={20} />} label="Holiday Packages" />
            <NavItem icon={<Train size={20} />} label="Trains" />
            <NavItem icon={<Bus size={20} />} label="Buses" />
            <NavItem icon={<MapPin size={20} />} label="Cabs" />
            <NavItem icon={<Map size={20} />} label="Visa" />
            <NavItem icon={<Map size={20} />} label="Forex Card & Currency" />
            <NavItem icon={<Map size={20} />} label="Travel Insurance" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active }: NavItemProps) => {
  return (
    <li className="mx-2">
      <a
        href="#"
        className={`flex flex-col items-center px-4 py-3 text-sm font-medium ${
          active ? 'active-nav-item' : 'text-gray-700 hover:text-travel-blue'
        }`}
      >
        {icon}
        <span className="mt-1">{label}</span>
      </a>
    </li>
  );
};

export default Navbar;
