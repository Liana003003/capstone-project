/* The form that the users need to fill has been divided into two pages, Reservations1 is the first page
and asks the user name, email, phone number and occasion including client-side validation and a confirm
button that will navigate to the second part of the form */

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

  const [error, setError] = useState({
  resname: "",
  resemail: "",
  resphone: "",
});

   const handleChange = (e) => {
  const newData = { ...formData, [e.target.name]: e.target.value };
  setFormData(newData);
  updateReservation(newData);
  setError((prev) => ({ ...prev, [e.target.name]: "" }));
};

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    let userErrors = {resname: "", resemail: "", resphone: ""};
    let isCorrect = true;

    if (!formData.resname.trim()) {
      userErrors.resname = "Please enter your full name";
      isCorrect = false;
    }

    if (!formData.resemail.trim() || !emailIsValid(formData.resemail)) {
      userErrors.resemail = "Please enter a valid email address";
      isCorrect = false;
    }

    if (!formData.resphone.trim()) {
      userErrors.resphone = "Please enter your phone number";
      isCorrect = false;
    }

    setError(userErrors);

    if (!isCorrect) return;

    updateReservation(formData);
    window.scrollTo({ top: 180, behavior: "instant" });
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
          <input type="text" aria-label="Enter full name" id="res-name" name="resname" required onChange={handleChange} value={formData.resname}/>
          {error.resname && <div className="error-message">{error.resname}</div>}
          <label htmlFor="res-email">Email *</label>
          <input type="email" aria-label="Enter email" id="res-email" name="resemail" required onChange={handleChange} value={formData.resemail}/>
          {error.resemail && <div className="error-message">{error.resemail}</div>}
          <label htmlFor="res-phone">Phone Number *</label>
          <input type="tel" aria-label="Enter phone number" id="res-phone" name="resphone" required onChange={handleChange} value={formData.resphone}/>
          {error.resphone && <div className="error-message">{error.resphone}</div>}
          <label htmlFor="res-occasion">Occasion</label>
          <input type="text" aria-label="Enter occasion" id="res-occasion" name="resoccasion" list="occasions-list" onChange={handleChange} value={formData.resoccasion}/>
          <datalist id="occasions-list">
            <option value="Birthday" />
            <option value="Anniversary" />
            <option value="Business Meeting" />
            <option value="Other" />
          </datalist>
          </form>
          </div>
      <div className="button-form-container">
      {(!formData.resname || !formData.resemail || !formData.resphone) && (
        <div className="overlay" onClick={() => {
          setError({
            resname: formData.resname ? "" : "Please enter your full name",
            resemail: formData.resemail ? "" : "Please enter your email address",
            resphone: formData.resphone ? "" : "Please enter your phone number",
          });
        }}>
        </div>
        )}
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm} disabled={!formData.resname || !formData.resemail || !formData.resphone}>Confirm</button>
     </div>
    </section>
      </>
  );
};


export default Reservations1;