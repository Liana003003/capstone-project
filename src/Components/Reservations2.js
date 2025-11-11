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

  const isFormValid =
    formData.resguests.trim() !== "" &&
    formData.resdate.trim() !== "" &&
    formData.restime.trim() !== "";

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    updateReservation(newData);
    setError("");
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

    const guests = Number(formData.resguests);

    if (!guests || guests < 1 || guests > 12) {
      setError("Please enter between 1 and 12 guests");
      return;
    }

    if (!formData.resdate.trim()) {
      setError("Please enter a date");
      return;
    }

    if (!formData.restime.trim()) {
      setError("Please select a time");
      return;
    }

    updateReservation(formData);
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
            <input
              type="number"
              id="res-guests"
              name="resguests"
              min="1"
              max="12"
              placeholder="1"
              required
              onChange={handleChange}
              value={formData.resguests}
            />

            <label htmlFor="res-date">Date *</label>
            <input
              type="date"
              id="res-date"
              name="resdate"
              required
              onChange={handleTimeDate}
              value={formData.resdate}
            />

            <label htmlFor="res-time">Time *</label>
            <input
              type="text"
              id="res-time"
              name="restime"
              list="availableTimes"
              required
              onChange={handleChange}
              value={formData.restime}
            />
            <datalist id="availableTimes">
              {availableTimes.map(time => <option key={time} value={time} />)}
            </datalist>

            <label htmlFor="res-preferences">Additional Preferences:</label>
            <input
              type="text"
              id="res-preferences"
              name="respreferences"
              onChange={handleChange}
              value={formData.respreferences}
            />
          </form>

          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="button-form-container">
          <button
            type="submit"
            className="reservation-submit-button"
            onClick={handleConfirm}
            disabled={!isFormValid}
          >
            Confirm
          </button>
        </div>
      </section>
    </>
  );
}

export default Reservations2;
