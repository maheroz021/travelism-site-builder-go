
import React from 'react';

interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const destinations: Destination[] = [
  { 
    id: 1, 
    name: 'Goa', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 2, 
    name: 'Mumbai', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 3, 
    name: 'Delhi', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 4, 
    name: 'Mukteshwar', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1544982326-2a992e27bf0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 5, 
    name: 'Gokarna', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 6, 
    name: 'Coonoor', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1582023617394-9f99138316ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 7, 
    name: 'Kasol', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 8, 
    name: 'Malvan', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: 9, 
    name: 'Jibhi', 
    description: 'Homestays - Villas & Apts',
    imageUrl: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const PopularDestinations = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="destination-card animate-scale-in">
      <a href="#" className="block">
        <div className="flex items-center p-4">
          <div className="flex-shrink-0 mr-4">
            <img 
              src={destination.imageUrl} 
              alt={destination.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">{destination.name}</h3>
            <p className="text-sm text-gray-600">{destination.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PopularDestinations;
