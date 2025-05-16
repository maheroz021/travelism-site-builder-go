
import React, { useState } from 'react';
import { Calendar, ChevronDown, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';

interface Location {
  city: string;
  country: string;
}

const SearchPanel = () => {
  const [location, setLocation] = useState<Location>({ city: 'Goa', country: 'India' });
  const [checkIn, setCheckIn] = useState<string>('Select Date');
  const [checkOut, setCheckOut] = useState<string>('Select Date');
  const [guests, setGuests] = useState<string>('Add Adults & Children');
  const [priceRange, setPriceRange] = useState<string>('₹0-₹1500, ₹1500-₹2500,...');

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-4 p-6">
      <h2 className="text-xl text-center text-gray-700 mb-6">Book your ideal Homestay - Villas, Apartments & more.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Location Input */}
        <div className="md:col-span-1">
          <label className="block text-sm text-gray-600 mb-1">City, Property Name Or Location</label>
          <div className="border border-gray-300 rounded-md p-2">
            <h3 className="font-bold text-lg">{location.city}</h3>
            <p className="text-gray-500 text-sm">{location.country}</p>
          </div>
        </div>
        
        {/* Check-In Date */}
        <div className="md:col-span-1">
          <label className="block text-sm text-gray-600 mb-1">Check-In</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal border border-gray-300",
                  checkIn !== "Select Date" && "text-black"
                )}
              >
                {checkIn}
                <Calendar className="ml-2 h-4 w-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <div className="p-4">
                <p>Calendar would go here</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Check-Out Date */}
        <div className="md:col-span-1">
          <label className="block text-sm text-gray-600 mb-1">Check-Out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal border border-gray-300",
                  checkOut !== "Select Date" && "text-black"
                )}
              >
                {checkOut}
                <Calendar className="ml-2 h-4 w-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <div className="p-4">
                <p>Calendar would go here</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Guests */}
        <div className="md:col-span-1">
          <label className="block text-sm text-gray-600 mb-1">Guests</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal border border-gray-300",
                  guests !== "Add Adults & Children" && "text-black"
                )}
              >
                {guests}
                <Users className="ml-2 h-4 w-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <div className="p-4">
                <p>Guest selector would go here</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Price Range */}
        <div className="md:col-span-1">
          <label className="block text-sm text-gray-600 mb-1">Price Per Night</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between text-left font-normal border border-gray-300"
              >
                {priceRange}
                <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <div className="p-4">
                <p>Price range selector would go here</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {/* Search Button */}
      <div className="mt-6 text-center">
        <button className="search-button">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
