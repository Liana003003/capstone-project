import { useNavigate } from "react-router-dom";

function Reservations2() {
  const navigate = useNavigate();
 
   const handleConfirm = () => {
     // (Optional) your form submission logic here
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
          <input type="number" id="res-guests" name="res-guests" min="1" max="12" required />
          <label htmlFor="res-date">Date *</label>
          <input type="date" id="res-date" name="res-date" required />
          <label htmlFor="res-time">Time *</label>
          <input type="text" id="res-time" name="res-time" list="different-times" required />
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
          <input type="text" id="res-preferences" name="res-preferences" />
          </form>
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm}>Confirm</button>
      </div>
    </section>
      </>
  );
}

export default Reservations2;