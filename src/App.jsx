import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/components/Login";
import { SignUp } from "@/components/SignUp";
import Dashboard from "@/components/pages/dashboard/Dashboard";
import Inventory from "@/components/pages/inventory/Inventory";
import Order from "@/components/pages/order/Order"
import Report from "@/components/pages/report/Report";
import Supplier from "@/components/pages/suppliers/Supplier"
import ManageStore from "@/components/pages/ManageStore/Store"
import Layout from "@/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protected routes with layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/report" element={<Report />} />
        <Route path="/supplier" element={<Supplier/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/store" element={<ManageStore/>} />
        <Route path="/settings" element={<div>Settings Page</div>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;