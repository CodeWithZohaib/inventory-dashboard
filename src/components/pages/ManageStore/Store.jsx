import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Search } from 'lucide-react';

// Sample data for stores
const storesData = [
  {
    id: 1,
    branchName: "Singanallur Branch",
    storeName: "Lisy Store",
    address: "1A/Krishnarajapuram, 3 rd street sulur",
    location: "Coimbatore - 6313403",
    phone: "044 - 653578"
  },
  {
    id: 2,
    branchName: "Slur Branch",
    storeName: "Lisy Store",
    address: "54 Ramani colony, 3 rd street sulur",
    location: "Coimbatore - 63133452",
    phone: "044 - 653763"
  },
  {
    id: 3,
    branchName: "Gaandipuram Branch",
    storeName: "Lisy Store",
    address: "32/ Venkatasamy layout, 3 rd street sulur",
    location: "Coimbatore - 6313403",
    phone: "044 - 653578"
  }
];

const StoreCard = ({ store, onEdit }) => {
  return (
    <Card className="mb-4 bg-gray-50 border-gray-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Branch Name */}
              <div className="flex items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {store.branchName}
                </h3>
              </div>
              
              {/* Right Column - Store Details */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-medium text-gray-900 mb-1">
                      {store.storeName}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {store.address}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      {store.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      {store.phone}
                    </p>
                  </div>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => onEdit(store.id)}
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ManageStorePage = () => {
  const [stores, setStores] = useState(storesData);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter stores based on search term
  const filteredStores = stores.filter(store =>
    store.branchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStore = () => {
    // Handle add store functionality
    console.log('Add store clicked');
  };

  const handleEditStore = (storeId) => {
    // Handle edit store functionality
    console.log('Edit store clicked:', storeId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex-1 p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Manage Store
        </h1>
        <Button 
          onClick={handleAddStore}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Store
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search product, supplier, order"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Store List */}
      <div className="space-y-4">
        {filteredStores.map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            onEdit={handleEditStore}
          />
        ))}
      </div>

      {/* Empty State (if no stores) */}
      {filteredStores.length === 0 && searchTerm === '' && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <p className="text-lg">No stores found</p>
            <p className="text-sm">Get started by adding your first store</p>
          </div>
          <Button 
            onClick={handleAddStore}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Store
          </Button>
        </div>
      )}

      {/* No Search Results */}
      {filteredStores.length === 0 && searchTerm !== '' && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <p className="text-lg">No stores match your search</p>
            <p className="text-sm">Try adjusting your search terms</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStorePage;