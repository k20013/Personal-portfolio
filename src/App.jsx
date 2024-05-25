import './App.css';
import { useState } from 'react';

import Landing from './components/landing/landing';

//Importación de componentes
import Nav from './components/nav/nav';
import GithubAdd from './components/github add/github add';
import Projects from './components/projects/projects';
import Backstory from './components/backstory/backstory';
import Technologies from './components/technologies/technologies';
import Formation from './components/formation/formation';

function App() {

  const [isSpanish, setIsSPanish] = useState(false);

  return (
    <>
      <Nav idiom={isSpanish} idiomHandler={() => setIsSPanish(!isSpanish)} />

      <Landing idiom={isSpanish} />

      <div className='contentContainer'>

        <div className='aux-div'>
          <Projects idiom={isSpanish} />
          <GithubAdd idiom={isSpanish} />
        </div>

        <Formation />

        <div className='aux-div'>
          <Technologies />
          <Backstory idiom={isSpanish} />
        </div>

      </div>

      <footer>
        <span>© 2024 Caleb Bravo</span>
      </footer>
    </>
  )
}

export default App