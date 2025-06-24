import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/components/Login";
import { SignUp } from "@/components/SignUp";
import Dashboard from "@/components/Dashboard";
import Inventory from "@/components/Inventory";
import Report from "@/components/Report";
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
        <Route path="/orders" element={<div>Orders Page</div>} />
        <Route path="/customers" element={<div>Customers Page</div>} />
        <Route path="/settings" element={<div>Settings Page</div>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;