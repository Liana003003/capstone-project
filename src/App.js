/* App.js contains the useReducer logic meant for the reservation pages. We were meant to
lift this logic up from Reservation to Main. Unfortunately that didn't quite work with my design
so I lifted it up all the way to App */

/*App also includes a modal that is meant to warn users that the website is fictional */

import React, { /* useState, useEffect,*/ useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AvailableTimesContext } from './context/AvailableTimesContext';

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
/* import Modal from './Modal'; */
import About from './Components/About';

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "update-times":
      return window.fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}

function App() {
  /* Modal appears on top of page instead of in a window. I'm disabling the related code until
     I figure out how to fix it */

 /* const [showModal, setShowModal] = useState(false); */
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

 /*  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenModal', 'true');
  }; */

  return (
    <>
     {/* <Modal show={showModal} onClose={handleClose} /> */}
      <Header />
      <AvailableTimesContext.Provider value={{ availableTimes, dispatch }}>
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
      </AvailableTimesContext.Provider>
      <Footer />
    </>
  );
}

export default App;

