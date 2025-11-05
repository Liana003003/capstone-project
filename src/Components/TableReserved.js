import { useNavigate } from "react-router-dom";

function TableReserved() {
    const navigate = useNavigate();

   const handleConfirm = () => {
     navigate("/");
   };
   return (
 <>
    <section id="green-header-container">
        <div className="green-header">
          <h1>Table Reserved</h1>
        </div>
      </section>
    <section id="reservation-form-container">
      <div className="reservation-form-box2">
        <div className="reservation-form2">
          <div className="yesno-reserved">
            <img src="tick1.svg" alt="checked icon" />
            </div>
            <div className="text1">
            <h2>Your table at Little Lemon has been reserved successfully!</h2>
            </div>
            <div className="text2">
            <p>You will receive a confirmation email shortly.</p>
            </div>
          </div>
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button" onClick={handleConfirm}>Home</button>
      </div>
      </section>
      </>
    );
    }

    export default TableReserved;