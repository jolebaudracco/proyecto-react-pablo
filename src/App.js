import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [numeroPagina, setNumeroPagina] = useState(0);

  const handleValueFromChild = (value) => {
    setNumeroPagina(value);
  };

  return (
    <>
      <div className="App">
        <Navbar sendValueToParent={handleValueFromChild} />
        {
          numeroPagina === 0 ? (
            <>
              <Home />
            </>
          ) : numeroPagina === 1 ? (
            <>
              <AboutMe />
            </>
          ) : numeroPagina === 2 ? (
            <>
              <Projects />
            </>
          ) : numeroPagina === 3 ? (
            <>
              <Contact />
            </>
          ) : (
            <h1>Pagina no encontrada</h1>
          )
        }
        <Footer />
      </div>
    </>
  );
}

export default App;
