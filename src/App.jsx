import './App.css';
import { useState } from 'react';

//Importación de componentes
import TapePlayer from './components/tape player/tape player';
import Footer from './components/footer/footer';

//Importación de Views
import About from './views/about/about';
import Formation from './views/formation/formation';
import Landing from './views/landing/landing';
import Projects from './views/projects/projects';

function App() {

  const [ curretnSection, setCurrentSection ] = useState("Landing");
  const sectionHandler = (section) => {
    setCurrentSection(section);
    setIsOpen(false);
  }
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div className={`walkman-container ${isOpen ? "isOpen" : ""}`}>

        <div className="top-half">
          <div className="tape-player">
            <TapePlayer />
          </div>
          <div className="right-section"></div>
        </div>

        <nav>
          <button onClick={() => sectionHandler("Landing")}>Landing</button>
          <button onClick={() => sectionHandler("Projects")}>Projects</button>
          <button onClick={() => sectionHandler("Formation")}>Formation</button>
          <button onClick={() => sectionHandler("About")}>About</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </nav>
      </div>

      { !isOpen && (<button onClick={() => setIsOpen(true)} className='menu-btn'>Menu</button>) }

      { curretnSection === "Landing" && <Landing /> }
      { curretnSection === "Projects" && <Projects /> }
      { curretnSection === "Formation" && <Formation /> }
      { curretnSection === "About" && <About /> }
      
      <Footer />
    </>
  )
}

export default App
