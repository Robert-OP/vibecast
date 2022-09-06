import * as React from 'react';
import { Canvas } from "@react-three/fiber";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "./components/Box";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </ThemeProvider>
  );
}

export default App;
