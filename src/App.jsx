import './App.css';
import { useState } from 'react';

//Importación de componentes
import Footer from './components/footer/footer';

//Importación de Views
import About from './views/about/about';
import Formation from './views/formation/formation';
import Landing from './views/landing/landing';
import Projects from './views/projects/projects';

function App() {

  const [ idiom, setIdiom ] = useState("ESP");

  return (
    <>

      <nav className='nav-bar'>
        <button onClick={
          () => idiom === "ESP" ? setIdiom("EN") : setIdiom("ESP")}>
          {idiom}
        </button>
      </nav>

      <Landing idiom={idiom} />
      <Projects idiom={idiom} />
      <About idiom={idiom} />
      <Formation idiom={idiom} />

      <Footer />
    </>
  )
}

export default App
