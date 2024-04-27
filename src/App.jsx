import './App.css';
import { useState } from 'react';

//Importación de componentes
import Footer from './components/footer/footer';
import Repos from './components/repos/repos';
import Nav from './components/nav/nav';

//Importación de Views
import About from './views/about/about';
import Formation from './views/formation/formation';
import Landing from './views/landing/landing';
import Projects from './views/projects/projects';

function App() {

  const [ isSpanish, setIsSPanish ] = useState(true);

  return (
    <>
      <Nav idiom={isSpanish} idiomHandler={() => setIsSPanish(!isSpanish)} />

      <Landing idiom={isSpanish} />
      <Projects />
      <Repos />
      <Formation idiom={isSpanish} />
      <About idiom={isSpanish} />

      <Footer />
    </>
  )
}

export default App
