import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { 
  Search, 
  Bell, 
  BarChart3, 
  TrendingUp, 
  Target, 
  DollarSign,
  Package,
  Truck,
  ShoppingCart,
  XCircle,
  RotateCcw,
  Users,
  Grid3X3
} from 'lucide-react';

// Mock data for charts
const salesPurchaseData = [
  { month: 'Jan', Purchase: 35000, Sales: 50000 },
  { month: 'Feb', Purchase: 60000, Sales: 55000 },
  { month: 'Mar', Purchase: 45000, Sales: 40000 },
  { month: 'Apr', Purchase: 40000, Sales: 45000 },
  { month: 'May', Purchase: 45000, Sales: 40000 },
  { month: 'Jun', Purchase: 55000, Sales: 50000 },
  { month: 'Jul', Purchase: 40000, Sales: 45000 },
  { month: 'Aug', Purchase: 45000, Sales: 40000 },
  { month: 'Sep', Purchase: 40000, Sales: 45000 },
  { month: 'Oct', Purchase: 45000, Sales: 40000 },
  { month: 'Nov', Purchase: 40000, Sales: 35000 },
  { month: 'Dec', Purchase: 35000, Sales: 40000 }
];

const orderSummaryData = [
  { month: 'Jan', Ordered: 4000, Delivered: 3500 },
  { month: 'Feb', Ordered: 3000, Delivered: 2800 },
  { month: 'Mar', Ordered: 2500, Delivered: 2200 },
  { month: 'Apr', Ordered: 3500, Delivered: 3200 },
  { month: 'May', Ordered: 2800, Delivered: 2500 }
];

const topSellingStock = [
  { name: 'Surf Excel', soldQuantity: 30, remainingQuantity: 12, price: '₹ 100' },
  { name: 'Rin', soldQuantity: 21, remainingQuantity: 15, price: '₹ 207' },
  { name: 'Parle G', soldQuantity: 19, remainingQuantity: 17, price: '₹ 105' }
];

const lowQuantityStock = [
  { name: 'Tata Salt', remainingQuantity: '10 Packet', status: 'Low' },
  { name: 'Lays', remainingQuantity: '15 Packet', status: 'Low' },
  { name: 'Lays', remainingQuantity: '15 Packet', status: 'Low' }
];

/**
 * Metric Card Component
 * Displays key performance indicators with icons and values
 */
const MetricCard = ({ title, value, icon: Icon, color = "text-blue-600" }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-gray-50 ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </CardContent>
  </Card>
);

/**
 * Sidebar Navigation Component
 */

/**
 * Header Component
 */
const Header = () => (
  <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search product, supplier, order" 
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm">
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

/**
 * Main Dashboard Component
 */
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <div className="flex-1">
        <Header />
        
        <main className="p-6">
          {/* Sales Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard 
                  title="Sales" 
                  value="₹ 832" 
                  icon={BarChart3} 
                  color="text-blue-600" 
                />
                <MetricCard 
                  title="Revenue" 
                  value="₹ 18,300" 
                  icon={TrendingUp} 
                  color="text-purple-600" 
                />
                <MetricCard 
                  title="Profit" 
                  value="₹ 868" 
                  icon={Target} 
                  color="text-orange-600" 
                />
                <MetricCard 
                  title="Cost" 
                  value="₹ 17,432" 
                  icon={DollarSign} 
                  color="text-green-600" 
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Inventory Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard 
                  title="Quantity in Hand" 
                  value="868" 
                  icon={Package} 
                  color="text-blue-600" 
                />
                <MetricCard 
                  title="To be received" 
                  value="200" 
                  icon={Truck} 
                  color="text-purple-600" 
                />
              </div>
            </div>
          </div>

          {/* Purchase Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Purchase Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard 
                  title="Purchase" 
                  value="82" 
                  icon={ShoppingCart} 
                  color="text-blue-600" 
                />
                <MetricCard 
                  title="Cost" 
                  value="₹ 13,573" 
                  icon={DollarSign} 
                  color="text-green-600" 
                />
                <MetricCard 
                  title="Cancel" 
                  value="5" 
                  icon={XCircle} 
                  color="text-purple-600" 
                />
                <MetricCard 
                  title="Return" 
                  value="₹17,432" 
                  icon={RotateCcw} 
                  color="text-orange-600" 
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard 
                  title="Number of Suppliers" 
                  value="31" 
                  icon={Users} 
                  color="text-blue-600" 
                />
                <MetricCard 
                  title="Number of Categories" 
                  value="21" 
                  icon={Grid3X3} 
                  color="text-purple-600" 
                />
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales & Purchase Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Sales & Purchase</CardTitle>
                <Badge variant="outline">Weekly</Badge>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesPurchaseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="Purchase" fill="#3b82f6" />
                    <Bar dataKey="Sales" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Order Summary Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={orderSummaryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="Ordered" stroke="#f59e0b" strokeWidth={2} />
                    <Line type="monotone" dataKey="Delivered" stroke="#8b5cf6" strokeWidth={2} />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Selling Stock */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Top Selling Stock</CardTitle>
                <Button variant="link" className="text-teal-600">See All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                    <span>Name</span>
                    <span>Sold Quantity</span>
                    <span>Remaining Quantity</span>
                    <span>Price</span>
                  </div>
                  {topSellingStock.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 text-sm py-2 border-b last:border-b-0">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.soldQuantity}</span>
                      <span>{item.remainingQuantity}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Quantity Stock */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Low Quantity Stock</CardTitle>
                <Button variant="link" className="text-teal-600">See All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lowQuantityStock.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">Remaining Quantity: {item.remainingQuantity}</p>
                        </div>
                      </div>
                      <Badge variant="destructive" className="bg-red-50 text-red-600 hover:bg-red-100">
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;