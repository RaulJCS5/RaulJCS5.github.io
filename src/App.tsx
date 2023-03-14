import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { NoPage } from './components/NoPage';
import FixedNavigationBar from './components/FixedNavigationBar';
import { Box } from '@mui/system';
import FixedBottomNavigationBar from './components/FixedBottomNavigationBar';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <FixedNavigationBar></FixedNavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <FixedBottomNavigationBar></FixedBottomNavigationBar>
      </Box>
    </BrowserRouter >
  );
}

export default App;
