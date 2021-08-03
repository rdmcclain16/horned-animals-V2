// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { animalData } from './data';
// import { useState } from 'react';


function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  // let toggleModal  = () => {
  //   setModalOpen(prevModalOpen => !prevModalOpen);
  // };
  return (
    <div className="App">
      <Header/>
      <Main 
        animalData={animalData}
      />
      <Footer/>
    </div>
  );
}

export default App;
