import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Reservations1 from './Components/Reservations1';
import Reservations2 from './Components/Reservations2';
import ReservationDetails from './Components/Reservation-Details';
import ConfirmCancel from './Components/ConfirmCancel';
import TableReserved from './Components/TableReserved';
import TableCancelled from './Components/TableCancelled';
import Login from './Components/Login';
import Modal from './Modal';
import About from './Components/About';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  return (
    <>
      <Modal show={showModal} onClose={handleClose} />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <Main />
          <About/>
          </>
        } />
        <Route path="/reservations" element={<Reservations1 />} />
        <Route path="/reservations1" element={<Reservations1 />} />
        <Route path="/reservations2" element={<Reservations2 />} />
        <Route path="/reservation-details" element={<ReservationDetails />} />
        <Route path="/confirmcancel" element={<ConfirmCancel />} />
        <Route path="/tablereserved" element={<TableReserved />} />
        <Route path="/tablecancelled" element={<TableCancelled />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

