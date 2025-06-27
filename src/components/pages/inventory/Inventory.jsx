import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
// Custom Table components since table is not available
const Table = ({ children, className = "" }) => (
  <div className={`w-full overflow-auto ${className}`}>
    <table className="w-full border-collapse">
      {children}
    </table>
  </div>
);

const TableHeader = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);

const TableBody = ({ children }) => (
  <tbody>{children}</tbody>
);

const TableRow = ({ children, className = "" }) => (
  <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`}>
    {children}
  </tr>
);

const TableHead = ({ children, className = "" }) => (
  <th className={`px-4 py-3 text-left text-sm font-medium text-gray-500 ${className}`}>
    {children}
  </th>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`px-4 py-3 text-sm text-gray-900 ${className}`}>
    {children}
  </td>
);
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Calendar,
  CalendarDays,
  Package,
  TrendingUp,
  AlertTriangle,
  Grid3X3,
  BarChart3,
  Users,
  ShoppingCart,
  Store,
  Settings,
  LogOut,
  Plus,
  Filter,
  Download,
  Upload
} from 'lucide-react';

const InventorySystem = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Maggi',
      buyingPrice: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: '11/12/22',
      availability: 'In-stock'
    },
    {
      id: 2,
      name: 'Bru',
      buyingPrice: 257,
      quantity: 22,
      threshold: 12,
      expiryDate: '21/12/22',
      availability: 'Out of stock'
    },
    {
      id: 3,
      name: 'Red Bull',
      buyingPrice: 405,
      quantity: 36,
      threshold: 9,
      expiryDate: '5/12/22',
      availability: 'In-stock'
    },
    {
      id: 4,
      name: 'Bourn Vita',
      buyingPrice: 502,
      quantity: 14,
      threshold: 6,
      expiryDate: '8/12/22',
      availability: 'Out of stock'
    },
    {
      id: 5,
      name: 'Horlicks',
      buyingPrice: 530,
      quantity: 5,
      threshold: 5,
      expiryDate: '9/1/23',
      availability: 'In-stock'
    },
    {
      id: 6,
      name: 'Harpic',
      buyingPrice: 605,
      quantity: 10,
      threshold: 5,
      expiryDate: '9/1/23',
      availability: 'In-stock'
    },
    {
      id: 7,
      name: 'Ariel',
      buyingPrice: 408,
      quantity: 23,
      threshold: 7,
      expiryDate: '15/12/23',
      availability: 'Out of stock'
    },
    {
      id: 8,
      name: 'Scotch Brite',
      buyingPrice: 359,
      quantity: 43,
      threshold: 8,
      expiryDate: '6/6/23',
      availability: 'In-stock'
    },
    {
      id: 9,
      name: 'Coca cola',
      buyingPrice: 205,
      quantity: 41,
      threshold: 10,
      expiryDate: '11/11/22',
      availability: 'Low stock'
    }
  ]);

  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    productId: '',
    category: '',
    buyingPrice: '',
    quantity: '',
    unit: '',
    expiryDate: '',
    threshold: ''
  });

  const categories = ['Food & Beverages', 'Household', 'Personal Care', 'Cleaning'];

  const handleInputChange = (field, value) => {
    setNewProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.buyingPrice && newProduct.quantity) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        buyingPrice: parseInt(newProduct.buyingPrice),
        quantity: parseInt(newProduct.quantity),
        threshold: parseInt(newProduct.threshold) || 5,
        expiryDate: newProduct.expiryDate,
        availability: parseInt(newProduct.quantity) > 10 ? 'In-stock' : 'Low stock'
      };
      
      setProducts(prev => [...prev, product]);
      setNewProduct({
        name: '',
        productId: '',
        category: '',
        buyingPrice: '',
        quantity: '',
        unit: '',
        expiryDate: '',
        threshold: ''
      });
      setIsAddProductOpen(false);
    }
  };

  const handleDiscard = () => {
    setNewProduct({
      name: '',
      productId: '',
      category: '',
      buyingPrice: '',
      quantity: '',
      unit: '',
      expiryDate: '',
      threshold: ''
    });
    setIsAddProductOpen(false);
  };

  const getStockBadge = (availability) => {
    const variants = {
      'In-stock': 'default',
      'Out of stock': 'destructive',
      'Low stock': 'secondary'
    };
    
    return (
      <Badge variant={variants[availability] || 'default'} className="text-xs">
        {availability}
      </Badge>
    );
  };

  const sidebarItems = [
    { icon: Grid3X3, label: 'Dashboard', active: false },
    { icon: Package, label: 'Inventory', active: true },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Users, label: 'Suppliers', active: false },
    { icon: ShoppingCart, label: 'Orders', active: false },
    { icon: Store, label: 'Manage Store', active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
    
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Search product, supplier, order"
                  className="w-80 pl-10"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Overview Cards */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Inventory</h2>
            <div className="grid grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-blue-600 font-medium">Categories</span>
                    <span className="text-2xl font-bold text-gray-900 mt-1">14</span>
                    <span className="text-xs text-gray-500 mt-1">Last 7 days</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-orange-600 font-medium">Total Products</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">868</span>
                      <span className="text-sm text-gray-600">₹25000</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Last 7 days</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-purple-600 font-medium">Top Selling</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">5</span>
                      <span className="text-sm text-gray-600">₹2500</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Last 7 days</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-red-600 font-medium">Low Stocks</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">12</span>
                      <span className="text-sm text-gray-600">2</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Ordered</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Products</CardTitle>
                <div className="flex space-x-2">
                  <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>New Product</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-6 py-4">
                        <div className="col-span-2">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">Drag image here</p>
                            <p className="text-sm text-gray-400">or</p>
                            <Button variant="link" className="text-blue-600">Browse Image</Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Product Name</Label>
                          <Input
                            placeholder="Enter product name"
                            value={newProduct.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Product ID</Label>
                          <Input
                            placeholder="Enter product ID"
                            value={newProduct.productId}
                            onChange={(e) => handleInputChange('productId', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Category</Label>
                          <Select value={newProduct.category} onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Buying Price</Label>
                          <Input
                            type="number"
                            placeholder="Enter buying price"
                            value={newProduct.buyingPrice}
                            onChange={(e) => handleInputChange('buyingPrice', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Quantity</Label>
                          <Input
                            type="number"
                            placeholder="Enter product quantity"
                            value={newProduct.quantity}
                            onChange={(e) => handleInputChange('quantity', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Unit</Label>
                          <Input
                            placeholder="Enter product unit"
                            value={newProduct.unit}
                            onChange={(e) => handleInputChange('unit', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Expiry Date</Label>
                          <Input
                            type="date"
                            placeholder="Enter expiry date"
                            value={newProduct.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Threshold Value</Label>
                          <Input
                            type="number"
                            placeholder="Enter threshold value"
                            value={newProduct.threshold}
                            onChange={(e) => handleInputChange('threshold', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2 pt-4">
                        <Button variant="outline" onClick={handleDiscard}>
                          Discard
                        </Button>
                        <Button onClick={handleAddProduct} className="bg-blue-600 hover:bg-blue-700">
                          Add Product
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
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
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Products</TableHead>
                    <TableHead>Buying Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Threshold Value</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Availability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>₹{product.buyingPrice}</TableCell>
                      <TableCell>{product.quantity} Packets</TableCell>
                      <TableCell>{product.threshold} Packets</TableCell>
                      <TableCell>{product.expiryDate}</TableCell>
                      <TableCell>{getStockBadge(product.availability)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex items-center justify-between mt-4">
                <Button variant="outline" size="sm">Previous</Button>
                <span className="text-sm text-gray-500">Page 1 of 10</span>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InventorySystem;