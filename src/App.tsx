import React from 'react';
import { useEffect, useMemo, useState } from 'react'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { NoPage } from './components/NoPage';
import FixedNavigationBar from './components/FixedNavigationBar';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import FixedBottomNavigationBar from './components/FixedBottomNavigationBar';
import { FlexibleBottomNavBar } from './components/FlexibleBottomNavBar';

function App() {
  const lightTheme = "light"
  const darkTheme = "dark"
  const [mode, setMode] = useState<'light' | 'dark'>(lightTheme);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  function toggleColorMode() {
    if (mode === darkTheme) {
      localStorage.setItem("theme", lightTheme)
      setMode(lightTheme)
    } else {
      localStorage.setItem("theme", darkTheme)
      setMode(darkTheme)
    }
  }
  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      localStorage.setItem("theme", lightTheme)
      setMode(lightTheme)
    } else {
      const localTheme = localStorage.getItem("theme") === lightTheme ? lightTheme : darkTheme
      setMode(localTheme)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Box>
          <FixedNavigationBar toggleColorMode={toggleColorMode} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <FlexibleBottomNavBar></FlexibleBottomNavBar>
        </Box>
      </HashRouter >
    </ThemeProvider>
  );
}

export default App;
