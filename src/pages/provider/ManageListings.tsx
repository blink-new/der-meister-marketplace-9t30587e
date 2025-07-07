import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const ManageListings: React.FC = () => {
  // Mock data for provider's services
  const listings = [
    {
      id: '1',
      title: 'Professionelle Hausreinigung',
      category: 'Reinigung',
      price: 25,
      priceType: 'hourly',
      active: true,
    },
    {
      id: '2',
      title: 'Gartenpflege und Heckenschnitt',
      category: 'Gartenbau',
      price: 35,
      priceType: 'hourly',
      active: true,
    },
    {
      id: '3',
      title: 'Kleine Reparaturen im Haushalt',
      category: 'Handwerker',
      price: 50,
      priceType: 'fixed',
      active: false,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Listings</h1>
        <Button>
          <PlusCircle className="w-5 h-5 mr-2" />
          Add New Listing
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card key={listing.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span className="text-lg">{listing.title}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${listing.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {listing.active ? 'Active' : 'Inactive'}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-500 mb-4">{listing.category}</p>
              <div className="text-2xl font-bold mb-4">
                {listing.price}€
                <span className="text-sm font-normal text-gray-600">
                  {listing.priceType === 'hourly' ? ' / hour' : ' fixed'}
                </span>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageListings;