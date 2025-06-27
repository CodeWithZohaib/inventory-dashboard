import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Plus, Bell } from "lucide-react"

// ProductForm component for the dialog
const ProductForm = ({ onSubmit, onDiscard }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productId: '',
    category: '',
    orderValue: '',
    quantity: '',
    unit: '',
    buyingPrice: '',
    dateOfDelivery: '',
    notifyOnDelivery: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form
    setFormData({
      productName: '',
      productId: '',
      category: '',
      orderValue: '',
      quantity: '',
      unit: '',
      buyingPrice: '',
      dateOfDelivery: '',
      notifyOnDelivery: false
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name</Label>
          <Input
            id="productName"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={(e) => handleInputChange('productName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="productId">Product ID</Label>
          <Input
            id="productId"
            placeholder="Enter product ID"
            value={formData.productId}
            onChange={(e) => handleInputChange('productId', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select product category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beverages">Beverages</SelectItem>
            <SelectItem value="snacks">Snacks</SelectItem>
            <SelectItem value="dairy">Dairy</SelectItem>
            <SelectItem value="household">Household</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="orderValue">Order value</Label>
          <Input
            id="orderValue"
            placeholder="Enter order value"
            value={formData.orderValue}
            onChange={(e) => handleInputChange('orderValue', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            placeholder="Enter product quantity"
            value={formData.quantity}
            onChange={(e) => handleInputChange('quantity', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Input
            id="unit"
            placeholder="Enter product unit"
            value={formData.unit}
            onChange={(e) => handleInputChange('unit', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyingPrice">Buying price</Label>
          <Input
            id="buyingPrice"
            placeholder="Enter buying price"
            value={formData.buyingPrice}
            onChange={(e) => handleInputChange('buyingPrice', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfDelivery">Date of delivery</Label>
        <Input
          id="dateOfDelivery"
          type="date"
          placeholder="Enter date of delivery"
          value={formData.dateOfDelivery}
          onChange={(e) => handleInputChange('dateOfDelivery', e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="notifyOnDelivery"
          checked={formData.notifyOnDelivery}
          onCheckedChange={(checked) => handleInputChange('notifyOnDelivery', checked)}
        />
        <Label htmlFor="notifyOnDelivery">Notify on the date of delivery</Label>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline" onClick={onDiscard}>
          Discard
        </Button>
        <Button onClick={handleSubmit}>
          Add Product
        </Button>
      </div>
    </div>
  );
};

// Main OrderPage component
const OrderPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orders, setOrders] = useState([
    { id: 7535, product: 'Maggi', value: 4306, quantity: '43 Packets', delivery: '11/12/22', status: 'Delayed' },
    { id: 5724, product: 'Bru', value: 2557, quantity: '22 Packets', delivery: '21/12/22', status: 'Confirmed' },
    { id: 2775, product: 'Red Bull', value: 4075, quantity: '36 Packets', delivery: '5/12/22', status: 'Returned' },
    { id: 2275, product: 'Bourn Vita', value: 5052, quantity: '14 Packets', delivery: '8/12/22', status: 'Out for delivery' },
    { id: 2427, product: 'Horlicks', value: 5370, quantity: '5 Packets', delivery: '9/1/23', status: 'Returned' },
    { id: 2578, product: 'Harpic', value: 6065, quantity: '10 Packets', delivery: '9/1/23', status: 'Out for delivery' },
    { id: 2757, product: 'Ariel', value: 4078, quantity: '23 Packets', delivery: '15/12/23', status: 'Delayed' },
    { id: 3757, product: 'Scotch Brite', value: 3559, quantity: '43 Packets', delivery: '6/6/23', status: 'Confirmed' },
    { id: 2474, product: 'Coca cola', value: 2055, quantity: '41 Packets', delivery: '11/11/22', status: 'Delayed' }
  ]);

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Delayed': { variant: 'destructive', color: 'bg-orange-100 text-orange-600' },
      'Confirmed': { variant: 'secondary', color: 'bg-blue-100 text-blue-600' },
      'Returned': { variant: 'outline', color: 'bg-gray-100 text-gray-600' },
      'Out for delivery': { variant: 'default', color: 'bg-green-100 text-green-600' }
    };

    const config = statusConfig[status] || { variant: 'default', color: 'bg-gray-100 text-gray-600' };
    
    return (
      <Badge className={`${config.color} border-none`}>
        {status}
      </Badge>
    );
  };

  const handleProductSubmit = (productData) => {
    console.log('New product added:', productData);
    setIsDialogOpen(false);
    // Here you would typically add the new order to your orders state
  };

  const handleDiscard = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-semibold text-blue-600">KANBAN</span>
          </div> */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search product, supplier, order"
              className="pl-10 w-80 bg-white"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-500" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Overall Orders Statistics */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overall Orders</h2>
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-blue-600 text-sm font-medium">Total Orders</div>
              <div className="text-2xl font-bold">37</div>
              <div className="text-gray-500 text-sm">Last 7 days</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-orange-600 text-sm font-medium">Total Received</div>
              <div className="text-2xl font-bold">32</div>
              <div className="text-gray-500 text-sm">Last 7 days</div>
              <div className="text-right">
                <span className="text-sm font-medium">₹25000</span>
                <div className="text-gray-500 text-xs">Revenue</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-purple-600 text-sm font-medium">Total Returned</div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-gray-500 text-sm">Last 7 days</div>
              <div className="text-right">
                <span className="text-sm font-medium">₹2500</span>
                <div className="text-gray-500 text-xs">Cost</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-orange-600 text-sm font-medium">On the way</div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-gray-500 text-sm">Ordered</div>
              <div className="text-right">
                <span className="text-sm font-medium">₹2356</span>
                <div className="text-gray-500 text-xs">Cost</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <div className=" flex items-center justify-between">
            <CardTitle>Orders</CardTitle>
            <div className=" flex items-center space-x-2">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                 <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="  w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent className=" max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>New Order</DialogTitle>
                    <DialogDescription>
                      Add a new product order to your inventory management system.
                    </DialogDescription>
                  </DialogHeader>
                  <ProductForm onSubmit={handleProductSubmit} onDiscard={handleDiscard} />
                </DialogContent>
              </Dialog>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline">Order History</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Products</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Order Value</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Quantity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Expected Delivery</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{order.product}</td>
                    <td className="py-3 px-4">₹{order.value}</td>
                    <td className="py-3 px-4">{order.quantity}</td>
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.delivery}</td>
                    <td className="py-3 px-4">{getStatusBadge(order.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline">Previous</Button>
            <span className="text-sm text-gray-500">Page 1 of 10</span>
            <Button variant="outline">Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderPage;