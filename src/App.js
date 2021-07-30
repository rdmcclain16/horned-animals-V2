// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { animalData } from './data';
import { useState } from 'react';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  let toggleModal  = () => {
    setModalOpen(prevModalOpen => !prevModalOpen);
  };
  return (
    <div className="App">
      <Header/>
      <Main 
        animalData={animalData} 
        modalOpen={modalOpen}
        toggleModal={toggleModal}
      />
      <Footer/>
      {/* <Main/>
      <Footer/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
