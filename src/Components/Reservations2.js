import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ReservationContext } from "../context/ReservationContext";

function Reservations2() {
  const navigate = useNavigate();
    const { reservation, updateReservation } = useContext(ReservationContext);
    const [formData, setFormData] = useState({
      resguests: reservation.resguests || "",
      resdate: reservation.resdate || "",
      restime: reservation.restime || "",
      respreferences: reservation.respreferences || "",
    });

    const [error, setError] = useState("");

    const isFormValid = formData.resguests.trim() !== "" && formData.resdate.trim() !== "" && formData.restime.trim() !== "";

     const handleChange = (e) => {
  const newData = { ...formData, [e.target.name]: e.target.value };
  setFormData(newData);
  updateReservation(newData);
  setError("");
};

    const handleConfirm = (e) => {
      e.preventDefault();

      if (!formData.resguests.trim() || formData.resguests.trim() < 0 || formData.resguests.trim() > 12) {
      setError("Please enter between 1 and 12 guests");
      return;
    }

    if (!formData.resdate.trim()) {
      setError("Please enter a date");
      return;
    }

    if (!formData.restime.trim()) {
      setError("Please a time");
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
          <input type="number" id="res-guests" name="resguests" min="1" max="12" required onChange={handleChange} value={formData.resguests}/>
          <label htmlFor="res-date">Date *</label>
          <input type="date" id="res-date" name="resdate" required onChange={handleChange} value={formData.resdate}/>
          <label htmlFor="res-time">Time *</label>
          <input type="text" id="res-time" name="restime" list="different-times" required onChange={handleChange} value={formData.restime}/>
          <datalist id="different-times">
            <option value="10:00" />
            <option value="10:30" />
            <option value="11:00" />
            <option value="11:30" />
            <option value="12:00" />
            <option value="12:30" />
            <option value="13:00" />
            <option value="13:30" />
            <option value="14:00" />
            <option value="18:00" />
            <option value="18:30" />
            <option value="19:00" />
            <option value="19:30" />
            <option value="20:00" />
            <option value="20:30" />
            <option value="21:00" />
          </datalist>
          <label htmlFor="res-preferences">Additional Preferences:</label>
          <input type="text" id="res-preferences" name="respreferences" onChange={handleChange}/>
          </form>
          {error && <div className="error-message">{error}</div>}
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button" maxLength="140" onClick={handleConfirm} disabled={!isFormValid}>Confirm</button>
      </div>
    </section>
      </>
  );
}

export default Reservations2;