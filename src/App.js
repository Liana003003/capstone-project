import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Reservations from './Components/Reservations';
import Login from './Components/Login';
import {useState, useEffect} from 'react';
import Modal from './Modal';


function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
    }
  }, []
);

const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  return (
    <>
        <Modal show={showModal} onClose={handleClose} />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
