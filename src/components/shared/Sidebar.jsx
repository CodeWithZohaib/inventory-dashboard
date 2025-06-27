import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  BarChart2,
  Building2,
  Package,
  ShoppingCart,
  Store,
  Settings,
  Grid3X3,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <BarChart3 className="h-4 w-4" /> },
    { name: 'Inventory', path: '/inventory', icon: <Package className="h-4 w-4" /> },
    { name: 'Orders', path: '/orders', icon: <ShoppingCart className="h-4 w-4" /> },
    { name: 'Report', path: '/report', icon: <BarChart2 className="h-4 w-4" /> },
        { name: 'Supplier', path: '/supplier', icon: <Building2 className="h-4 w-4" /> },
    { name: 'Manage Store', path: '/store', icon: <Store className="h-4 w-4" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="outline" size="icon" onClick={toggleSidebar}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-sm border-r border-gray-200 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-0
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Grid3X3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">KANBAN</span>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => `
                  flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-teal-50 text-teal-700 hover:bg-teal-100' 
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50">
            Log Out
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;