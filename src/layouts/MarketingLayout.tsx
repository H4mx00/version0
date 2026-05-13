import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/homepage/Navbar';
import { Footer } from '../components/homepage/Footer';

export function MarketingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
