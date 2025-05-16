
import React from 'react';
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="promo-banner">
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Unlock the Best of Queensland on the Gold Coast!
            </h3>
            <p className="text-gray-200">
              Discover pristine beaches, lush rainforests, and thrilling adventures.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button className="bg-white text-travel-dark hover:bg-gray-100 transition-colors px-6">
              EXPLORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
