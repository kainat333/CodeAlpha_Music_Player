import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
<div>
 <  Navbar/>
 <Outlet/>
 </div>
  );
};

export default AppLayout;
