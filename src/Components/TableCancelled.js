import { useNavigate } from "react-router-dom";

function TableCancelled() {
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
            <img src="notick.svg" alt="red x icon" />
            </div>
            <div className="text1">
            <h2>Your table at Little Lemon has been cancelled</h2>
            </div>
            <div className="text2">
            <p>We hope to see you again</p>
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

    export default TableCancelled;