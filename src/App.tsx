import * as React from "react";
import { Canvas } from "@react-three/fiber";

import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Spline from "@splinetool/react-spline";

import Box from "./components/Box";
import Header from "./components/Header";
import "./App.css";
import { CardHeader } from "@mui/material";

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Card sx={{ maxWidth: 445 }}>
            <Spline scene="https://prod.spline.design/gaG9fi2SGfvP0XcK/scene.splinecode" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vibecast Studio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our mission it to creating a great atmosphere where everyone
                feels included. In his heart, music is the perfect link that can
                connect and immerse people in a memorable experience. This is
                why we strives to accomplish every time, whilst blending
                different genres of music to create a unique and groovy vibe.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
