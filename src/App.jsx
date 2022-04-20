import { useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./styles/global";
import { themes } from "./styles/themes";
import Works from "./components/Works/Works";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark'

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
