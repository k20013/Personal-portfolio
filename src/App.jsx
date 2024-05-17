import './App.css';
import { useState } from 'react';

import Landing from './components/landing/landing';

//Importación de componentes
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import GithubAdd from './components/github add/github add';
import Projects from './components/projects/projects';
import Backstory from './components/backstory/backstory';
import { BasicTech, FrontendTech, BackendTech, DatabaseTech } from './components/technologies/technologies';
import Formation from './components/formation/formation';

function App() {

  const [isSpanish, setIsSPanish] = useState(true);

  return (
    <>
      <Nav idiom={isSpanish} idiomHandler={() => setIsSPanish(!isSpanish)} />

      <Landing idiom={isSpanish} />

      <div className='contentContainer'>


        <Projects idiom={isSpanish} />


      </div>

      <Footer />
    </>
  )
}

export default App

/*
<GithubAdd />
<Backstory />
        <BasicTech />
        <FrontendTech />
        <BackendTech />
        <DatabaseTech />
        <Formation />
*/
