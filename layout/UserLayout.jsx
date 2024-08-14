// UserLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '@/pages/Admin/SideNav'; // Assuming SideNav is the component for navigation

const layoutStyle = {
  display: 'flex',
};

const contentStyle = {
  marginLeft: '200px', // Adjust based on your sidebar width
  padding: '20px',
  flex: 1,
};

const UserLayout = () => {
  return (
    <div style={layoutStyle}>
      <SideNav />
      <div style={contentStyle}>
        <Outlet /> {/* Render the child routes here */}
      </div>
    </div>
  );
};

export default UserLayout;
