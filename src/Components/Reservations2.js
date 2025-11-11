/* Reservations2 is the second part of the form asking the user for number of guests, date, time and additional
preferences if any. It also includes client-validation code and a confirm button that leads to a reservation
details page */

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../context/ReservationContext";
import { AvailableTimesContext } from "../context/AvailableTimesContext";

function Reservations2({onSubmit}) {
  const navigate = useNavigate();
  const { reservation, updateReservation } = useContext(ReservationContext);
   const { availableTimes, dispatch } = useContext(AvailableTimesContext);

  const [formData, setFormData] = useState({
    resguests: reservation.resguests || "",
    resdate: reservation.resdate || "",
    restime: reservation.restime || "",
    respreferences: reservation.respreferences || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    updateReservation(newData);
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleTimeDate = (e) => {
    const userDate = e.target.value;
    setFormData({ ...formData, resdate: userDate });
    dispatch({ type: "update-times", payload: userDate });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (onSubmit) {
    onSubmit(formData);}

    let userErrors = {resguests: "", resdate: "", restime: ""};
    let isCorrect = true;

    const guests = Number(formData.resguests);

    if (!guests || guests < 1 || guests > 10) {
      userErrors.resguests = "Please enter between 1 and 10 guests";
      isCorrect = false;
    }

    if (!formData.resdate.trim()) {
      userErrors.resdate = "Please enter a date";
      isCorrect = false;
    }

    if (!formData.restime.trim()) {
      userErrors.restime = "Please select a time";
      isCorrect = false;
    }

    setError(userErrors);

    if (!isCorrect) return;

    updateReservation(formData);
    window.scrollTo({ top: 180, behavior: "instant" });
    navigate("/reservation-details");
  };

  return (
    <>
      <section id="green-header-container">
        <div className="green-header">
          <h1>Reserve a Table</h1>
        </div>
      </section>

      <section id="reservation-form-container">
        <div className="reservation-form-box">
          <form className="reservation-form">
            <label htmlFor="res-guests">Number of Guests *</label>
            <input type="number" aria-label="Enter number of guests" id="res-guests" name="resguests" min="1" max="10" placeholder="1" required onChange={handleChange} value={formData.resguests}/>
             {error.resguests && <div className="error-message">{error.resguests}</div>}

            <label htmlFor="res-date">Date *</label>
            <input type="date" id="res-date" name="resdate" required onChange={handleTimeDate} value={formData.resdate}/>
             {error.resdate && <div className="error-message">{error.resdate}</div>}

            <label htmlFor="res-time">Time *</label>
            <input type="text" id="res-time" name="restime" list="availableTimes" required onChange={handleChange} value={formData.restime}/>
             {error.restime && <div className="error-message">{error.restime}</div>}
            <datalist id="availableTimes">
              {availableTimes.map(time => <option key={time} value={time} />)}
            </datalist>

            <label htmlFor="res-preferences">Additional Preferences:</label>
            <input type="text" aria-label="Enter additional preferences" id="res-preferences" name="respreferences" onChange={handleChange} value={formData.respreferences}/>

          </form>
         </div>
        <div className="button-form-container">
      {(!formData.resguests || !formData.resdate || !formData.restime) && (
        <div className="overlay" onClick={() => {
          setError({
            resguests: formData.resguests ? "" : "Please enter number of guests",
            resdate: formData.resdate ? "" : "Please choose a date for your reservation",
            restime: formData.restime ? "" : "Please choose a time for your reservation",
          });
        }}>
        </div>
        )}
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm} disabled={!formData.resguests || !formData.resdate || !formData.restime}>Confirm</button>
     </div>
      </section>
    </>
  );
}

export default Reservations2;
