import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


function App() {
  const [darkmode, setDarkMode]= useState(false);
  const paletteType = darkmode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: { default: paletteType === 'light'? "#eaeaea": "#121212" }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
