import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Goal from './Goal';
import WeightGain from './WeightGain';
import { Outlet } from 'react-router-dom'; // Use Outlet for nested routes
import Home from './Home';
import Footer from './Footer';
import ScrollToTop from './ScrolltoTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> 
      <Outlet /> {/* Handles routing via nested routes */}
      <Footer />
    </>
  );
}

export default App;
