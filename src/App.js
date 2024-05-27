import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/ThemeContext';
import Main from './components/Main'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
