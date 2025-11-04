import { useNavigate } from "react-router-dom";

function Reservations1() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // (Optional) your form submission logic here
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
          <input type="text" id="res-name" name="res-name" required />
          <label htmlFor="res-email">Email *</label>
          <input type="email" id="res-email" name="res-email" required />
          <label htmlFor="res-phone">Phone Number *</label>
          <input type="tel" id="res-phone" name="res-phone" required />
          <label htmlFor="res-occasion">Occasion</label>
          <input type="text" id="res-occasion" name="res-occasion" list="occasions-list"/>
          <datalist id="occasions-list">
            <option value="Birthday" />
            <option value="Anniversary" />
            <option value="Business Meeting" />
            <option value="Other" />
          </datalist>
          </form>
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm}>Confirm</button>
      </div>
    </section>
      </>
  );
}

export default Reservations1;