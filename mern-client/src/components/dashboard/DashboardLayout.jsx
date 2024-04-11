// DashboardLayout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '/src/components/dashboard/sidebar'; 
import Navbar from '../Navbar';

const DashboardLayout = () => {
  return (
    <>
      <Navbar/>
      <div className='flex gap-6 flex-col md:flex-row'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
