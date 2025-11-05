import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ReservationContext } from "../context/ReservationContext";

function Reservations1() {
  const navigate = useNavigate();
  const { reservation, updateReservation } = useContext(ReservationContext);
  const [formData, setFormData] = useState({
    resname: reservation.resname || "",
    resemail: reservation.resemail || "",
    resphone: reservation.resphone || "",
    resoccasion: reservation.resoccasion || "",
  });

  const isFormValid = formData.resname.trim() !== "" && formData.resemail.trim() !== "" && formData.resphone.trim() !== "";

   const handleChange = (e) => {
  const newData = { ...formData, [e.target.name]: e.target.value };
  setFormData(newData);
  updateReservation(newData);
};

  const handleConfirm = (e) => {
    e.preventDefault();
    updateReservation(formData);
    navigate("/reservations2");
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
          <label htmlFor="res-name"> Full Name *</label>
          <input type="text" id="res-name" name="resname" required onChange={handleChange} value={formData.resname}/>
          <label htmlFor="res-email">Email *</label>
          <input type="email" id="res-email" name="resemail" required onChange={handleChange} value={formData.resemail}/>
          <label htmlFor="res-phone">Phone Number *</label>
          <input type="tel" id="res-phone" name="resphone" required onChange={handleChange} value={formData.resphone}/>
          <label htmlFor="res-occasion">Occasion</label>
          <input type="text" id="res-occasion" name="resoccasion" list="occasions-list" onChange={handleChange} value={formData.resoccasions}/>
          <datalist id="occasions-list">
            <option value="Birthday" />
            <option value="Anniversary" />
            <option value="Business Meeting" />
            <option value="Other" />
          </datalist>
          </form>
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm} disabled={!isFormValid}>Confirm</button>
      </div>
    </section>
      </>
  );
}

export default Reservations1;