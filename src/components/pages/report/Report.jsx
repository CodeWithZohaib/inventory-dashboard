import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot } from 'recharts';

// Sample data - in real implementation, this would come from props or API
const overviewMetrics = [
  { title: "Total Profit", value: "₹21,190", label: "Total Profit" },
  { title: "Revenue", value: "₹18,300", label: "Revenue" },
  { title: "Sales", value: "₹17,432", label: "Sales" },
  { title: "", value: "", label: "" } // Empty card for layout
];

const secondaryMetrics = [
  { title: "Net purchase value", value: "₹1,17,432" },
  { title: "Net sales value", value: "₹80,432" },
  { title: "MoM Profit", value: "₹30,432" },
  { title: "YoY Profit", value: "₹1,10,432" }
];

const chartData = [
  { month: 'Sep', revenue: 25000, profit: 20000 },
  { month: 'Oct', revenue: 35000, profit: 28000 },
  { month: 'Nov', revenue: 28000, profit: 25000 },
  { month: 'Dec', revenue: 45000, profit: 38000 },
  { month: 'Jan', revenue: 52000, profit: 42000 },
  { month: 'Feb', revenue: 48000, profit: 40000 },
  { month: 'Mar', revenue: 42000, profit: 35000 }
];

const bestSellingCategories = [
  { category: "Vegetable", turnOver: "₹26,000", increaseBy: "3.2%" },
  { category: "Instant Food", turnOver: "₹22,000", increaseBy: "2%" },
  { category: "Households", turnOver: "₹22,000", increaseBy: "1.5%" }
];

const bestSellingProducts = [
  { product: "Tomato", productId: "23567", category: "Vegetable", remainingQty: "225 kg", turnOver: "₹17,000", increaseBy: "2.3%" },
  { product: "Onion", productId: "25831", category: "Vegetable", remainingQty: "200 kg", turnOver: "₹12,000", increaseBy: "1.3%" },
  { product: "Maggi", productId: "56841", category: "Instant Food", remainingQty: "200 Packet", turnOver: "₹10,000", increaseBy: "1.3%" },
  { product: "Surf Excel", productId: "23567", category: "Household", remainingQty: "125 Packet", turnOver: "₹9,000", increaseBy: "1%" }
];

// Custom dot component for chart highlight
const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  if (payload.month === 'Dec') {
    return <Dot cx={cx} cy={cy} r={4} fill="#3b82f6" stroke="#ffffff" strokeWidth={2} />;
  }
  return null;
};

const DashboardReport = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewMetrics.map((metric, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-4">
                {metric.value && (
                  <>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryMetrics.map((metric, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-500 mt-1">{metric.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profit & Revenue Chart */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Profit & Revenue</CardTitle>
                <Button variant="outline" size="sm" className="text-xs">
                  Weekly
                </Button>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-xs text-gray-500">Dec Month</div>
                  <div className="text-2xl font-bold">220,342,123</div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#666' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#666' }}
                        tickFormatter={(value) => `${value/1000}k`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        dot={<CustomDot />}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Revenue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Profit</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Best Selling Category */}
          <div>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Best selling category</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
                  See All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-xs font-medium text-gray-500 pb-2 border-b">
                    <div>Category</div>
                    <div>Turn Over</div>
                    <div>Increase By</div>
                  </div>
                  {bestSellingCategories.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 text-sm">
                      <div className="text-gray-900">{item.category}</div>
                      <div className="text-gray-900">{item.turnOver}</div>
                      <div className="text-green-600 font-medium">{item.increaseBy}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Selling Products Table */}
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Best selling product</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
              See All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Product</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Product ID</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Category</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Remaining Quantity</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Turn Over</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Increase By</th>
                  </tr>
                </thead>
                <tbody>
                  {bestSellingProducts.map((product, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3 text-sm text-gray-900">{product.product}</td>
                      <td className="py-3 text-sm text-gray-600">{product.productId}</td>
                      <td className="py-3 text-sm text-gray-600">{product.category}</td>
                      <td className="py-3 text-sm text-gray-600">{product.remainingQty}</td>
                      <td className="py-3 text-sm text-gray-900 font-medium">{product.turnOver}</td>
                      <td className="py-3 text-sm text-green-600 font-medium">{product.increaseBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardReport;