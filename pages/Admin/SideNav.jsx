import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, User, Users, DollarSign, FileText, CheckSquare, LogOut } from 'lucide-react';

const sideNavStyle = {
  width: '200px',
  height: '100vh',
  position: 'fixed',
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 0',
  fontSize: '16px',
};

const iconStyle = {
  width: '20px',
  height: '20px',
};

const SideNav = () => {
  return (
    <div style={sideNavStyle}>
      <Link to="/dash" style={linkStyle}><Home style={iconStyle} /> Dashboard</Link>
      <Link to="/admin/orders" style={linkStyle}><ShoppingBag style={iconStyle} /> Orders</Link> {/* Updated link */}
      <Link to="/adminuserspage" style={linkStyle}><Users style={iconStyle} /> Users</Link>
      <Link to="/adminproducts" style={linkStyle}><FileText style={iconStyle} /> Products</Link>
      <Link to="/profile" style={linkStyle}><User style={iconStyle} /> Profile</Link>
      <Link to="/login" style={linkStyle}><LogOut style={iconStyle} /> Logout</Link>
    </div>
  );
};

export default SideNav;
