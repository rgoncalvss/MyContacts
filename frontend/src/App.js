import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme ? initialTheme : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => {
      const newTheme = prevState === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;
