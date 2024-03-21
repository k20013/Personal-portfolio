import './App.css';

//Importación de componentes
import TapePlayer from './components/tape player/tape player';

function App() {

  return (
    <>
      <div className="walkman-container">

        <div className="top-half">

          <div className="tape-player">
            <TapePlayer />
          </div>

          <div className="right-section"></div>

        </div>

        <nav></nav>

      </div>
    </>
  )
}

export default App
