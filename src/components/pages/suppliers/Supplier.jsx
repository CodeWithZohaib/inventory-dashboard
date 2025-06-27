import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  User,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for suppliers
const mockSuppliers = [
  {
    id: 1,
    name: "Richard Martin",
    product: "Kit Kat",
    contactNumber: "7687764556",
    email: "richard@gmail.com",
    type: "Taking Return",
    onTheWay: "13"
  },
  {
    id: 2,
    name: "Tom Homan",
    product: "Maaza",
    contactNumber: "9867545368",
    email: "tomhoman@gmail.com",
    type: "Taking Return",
    onTheWay: "-"
  },
  {
    id: 3,
    name: "Veandir",
    product: "Dairy Milk",
    contactNumber: "9867545556",
    email: "veandir@gmail.com",
    type: "Not Taking Return",
    onTheWay: "-"
  },
  {
    id: 4,
    name: "Charin",
    product: "Tomato",
    contactNumber: "9267545457",
    email: "charin@gmail.com",
    type: "Taking Return",
    onTheWay: "12"
  },
  {
    id: 5,
    name: "Hoffman",
    product: "Milk Bikis",
    contactNumber: "9367545531",
    email: "hoffman@gmail.com",
    type: "Taking Return",
    onTheWay: "-"
  },
  {
    id: 6,
    name: "Fainden Juke",
    product: "Marie Gold",
    contactNumber: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    onTheWay: "9"
  },
  {
    id: 7,
    name: "Martin",
    product: "Saffola",
    contactNumber: "9867545457",
    email: "martin@gmail.com",
    type: "Taking Return",
    onTheWay: "-"
  },
  {
    id: 8,
    name: "Joe Nike",
    product: "Good day",
    contactNumber: "9567545769",
    email: "joenike@gmail.com",
    type: "Taking Return",
    onTheWay: "-"
  },
  {
    id: 9,
    name: "Dender Luke",
    product: "Apple",
    contactNumber: "9687545980",
    email: "dender@gmail.com",
    type: "",
    onTheWay: "7"
  },
  {
    id: 10,
    name: "Martin",
    product: "Saffola",
    contactNumber: "9867545457",
    email: "martin@gmail.com",
    type: "Taking Return",
    onTheWay: "-"
  }
];

// Button Component
// const Button = ({ children, onClick, variant = "default", size = "default", className = "", ...props }) => {
//   const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 bg-white hover:bg-gray-50",
//     ghost: "hover:bg-gray-100"
//   };
  
//   const sizes = {
//     default: "h-10 py-2 px-4",
//     sm: "h-9 px-3",
//     lg: "h-11 px-8"
//   };
  
//   return (
//     <button
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// Input Component
// const Input = ({ placeholder, className = "", ...props }) => {
//   return (
//     <input
//       className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
//       placeholder={placeholder}
//       {...props}
//     />
//   );
// };

// Select Component
// const Select = ({ children, onValueChange, defaultValue }) => {
//   return (
//     <select
//       className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//       onChange={(e) => onValueChange && onValueChange(e.target.value)}
//       defaultValue={defaultValue}
//     >
//       {children}
//     </select>
//   );
// };

// Dialog Components
// const Dialog = ({ open, onOpenChange, children }) => {
//   if (!open) return null;
  
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50"
//         onClick={() => onOpenChange(false)}
//       />
//       <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
//         {children}
//       </div>
//     </div>
//   );
// };

// const DialogTrigger = ({ children, asChild }) => {
//   return <>{children}</>;
// };

// const DialogContent = ({ children, className = "" }) => {
//   return (
//     <div className={`p-6 ${className}`}>
//       {children}
//     </div>
//   );
// };

// const DialogHeader = ({ children }) => {
//   return <div className="mb-4">{children}</div>;
// };

// const DialogTitle = ({ children }) => {
//   return <h2 className="text-lg font-semibold">{children}</h2>;
// };

// const DialogFooter = ({ children }) => {
//   return <div className="flex justify-end gap-2 mt-6">{children}</div>;
// };

// Badge Component
const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Add Supplier Dialog Component
const AddSupplierDialog = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    supplierName: '',
    product: '',
    category: '',
    buyingPrice: '',
    contactNumber: '',
    type: 'not-taking-return'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Adding supplier:', formData);
    // Note: We're not closing the form after submission as per requirements
    
    // Reset form fields but keep the form open
    setFormData({
      supplierName: '',
      product: '',
      category: '',
      buyingPrice: '',
      contactNumber: '',
      type: 'not-taking-return'
    });
  };

  const handleDiscard = () => {
    // Reset form
    setFormData({
      supplierName: '',
      product: '',
      category: '',
      buyingPrice: '',
      contactNumber: '',
      type: 'not-taking-return'
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>New Supplier</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">Drag image here</p>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Browse Image
            </Button>
          </div>

          {/* Form Fields */}
          <div>
            <Label htmlFor="supplierName" className="block text-sm font-medium mb-1">
              Supplier Name
            </Label>
            <Input
              id="supplierName"
              placeholder="Enter supplier name"
              value={formData.supplierName}
              onChange={(e) => handleInputChange('supplierName', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="product" className="block text-sm font-medium mb-1">
              Product
            </Label>
            <Input
              id="product"
              placeholder="Enter product"
              value={formData.product}
              onChange={(e) => handleInputChange('product', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </Label>
            <Select
              onValueChange={(value) => handleInputChange('category', value)}
              value={formData.category}
            >
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="beverage">Beverage</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="buyingPrice" className="block text-sm font-medium mb-1">
              Buying Price
            </Label>
            <Input
              id="buyingPrice"
              placeholder="Enter buying price"
              value={formData.buyingPrice}
              onChange={(e) => handleInputChange('buyingPrice', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="contactNumber" className="block text-sm font-medium mb-1">
              Contact Number
            </Label>
            <Input
              id="contactNumber"
              placeholder="Enter supplier contact number"
              value={formData.contactNumber}
              onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">
              Type
            </Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={formData.type === 'not-taking-return' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleInputChange('type', 'not-taking-return')}
              >
                Not taking return
              </Button>
              <Button
                type="button"
                variant={formData.type === 'taking-return' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleInputChange('type', 'taking-return')}
              >
                Taking return
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleDiscard}>
            Discard
          </Button>
          <Button onClick={handleSubmit}>
            Add Supplier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Main Supplier Component
const Supplier = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [suppliers, setSuppliers] = useState(mockSuppliers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const totalPages = 10; // Mock total pages

  const getTypeVariant = (type) => {
    if (type === 'Taking Return') return 'success';
    if (type === 'Not Taking Return') return 'warning';
    return 'default';
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">Suppliers</h1>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setIsAddDialogOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Supplier
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download all
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  On the way
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {supplier.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {supplier.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {supplier.contactNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {supplier.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {supplier.type && (
                      <Badge variant={getTypeVariant(supplier.type)}>
                        {supplier.type}
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {supplier.onTheWay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add Supplier Dialog */}
      <AddSupplierDialog 
        open={isAddDialogOpen} 
        onOpenChange={setIsAddDialogOpen}
      />
    </div>
  );
};

export default Supplier;