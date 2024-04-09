import './App.css';
import { useState } from 'react';

//Importación de componentes
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

//Importación de Views
import About from './views/about/about';
import Formation from './views/formation/formation';
import Landing from './views/landing/landing';
import Projects from './views/projects/projects';

function App() {

  const [ isSpanish, setIsSPanish ] = useState(true);

  return (
    <>
      <nav className='nav-bar'>

        <Contact />

        <span>ESP</span>
        <input value="is_hot" name="temperature" type="checkbox" class="ch"
        onClick={() => isSpanish ? setIsSPanish(false) : setIsSPanish(true)} />
        <span>ENG</span>

      </nav>

      <Landing idiom={isSpanish} />
      <Projects />
      <About idiom={isSpanish} />
      <Formation idiom={isSpanish} />

      <Footer />
    </>
  )
}

export default App
