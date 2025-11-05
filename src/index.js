import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ReservationProvider } from './context/ReservationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <ReservationProvider>
    <App />
  </ReservationProvider>
  </BrowserRouter>
);
