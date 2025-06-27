import React, { useState } from 'react';
import { User, Upload } from 'lucide-react';

// Button Component
const Button = ({ children, onClick, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ placeholder, className = "", ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

// Select Component
const Select = ({ children, onValueChange, defaultValue }) => {
  return (
    <select
      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
};

// Dialog Components
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

const DialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const DialogTitle = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

const DialogFooter = ({ children }) => {
  return <div className="flex justify-end gap-2 mt-6">{children}</div>;
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
    onOpenChange(false);
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

  const handleDiscard = () => {
    onOpenChange(false);
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
            <Button variant="outline" size="sm" className="text-blue-600">
              <Upload className="w-4 h-4 mr-2" />
              Browse Image
            </Button>
          </div>

          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Supplier Name
            </label>
            <Input
              placeholder="Enter supplier name"
              value={formData.supplierName}
              onChange={(e) => handleInputChange('supplierName', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product
            </label>
            <Input
              placeholder="Enter product"
              value={formData.product}
              onChange={(e) => handleInputChange('product', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <Select
              onValueChange={(value) => handleInputChange('category', value)}
              defaultValue=""
            >
              <option value="">Select product category</option>
              <option value="food">Food</option>
              <option value="beverage">Beverage</option>
              <option value="snacks">Snacks</option>
              <option value="dairy">Dairy</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Buying Price
            </label>
            <Input
              placeholder="Enter buying price"
              value={formData.buyingPrice}
              onChange={(e) => handleInputChange('buyingPrice', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <Input
              placeholder="Enter supplier contact number"
              value={formData.contactNumber}
              onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <div className="flex gap-2">
              <Button
                variant={formData.type === 'not-taking-return' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleInputChange('type', 'not-taking-return')}
              >
                Not taking return
              </Button>
              <Button
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

// Demo component to show the dialog in action
const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">AddSupplierDialog Demo</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          Open Add Supplier Dialog
        </Button>
        
        <AddSupplierDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </div>
  );
};

export default App;