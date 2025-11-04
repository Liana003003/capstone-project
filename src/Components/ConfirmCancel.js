import { useNavigate } from "react-router-dom";
 
 function ConfirmCancel() {
  const navigate = useNavigate();
 
   const handleYesCancel = () => {
     // (Optional) your form submission logic here
     navigate("/tablecancelled");
   };

   const handleNoCancel = () => {
     // (Optional) your form submission logic here
     navigate("/reservation-details");
   };

   return (
 <>
    <section id="green-header-container">
        <div className="green-header">
          <h1>Reservation Details</h1>
        </div>
      </section>
    <section id="reservation-form-container">
      <div className="reservation-form-box">
        <div className="reservation-form">
            <div className="details-name-container1">
            <div className="details-name">
                <div className="part1">
                    <p>Full Name</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            </div>
            <div className="details-name-container2">
            <div className="details-name">
                <div className="part1">
                    <p>Email</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Phone Number</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Occasion</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Number of Guests</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Date</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Time</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Additional Preferences:</p>
                </div>
                <div className="part2">
                    <p>To be filled</p>
                </div>
            </div>
        </div>
      </div>
      </section>
      <section id="details-correct-container">
       <div className="details-correct">
        <div className="correct-details">
            <p>Are your sure you want to cancel your table?</p>
        </div>
        <div className="red-duo">
            <button type="submit" className="red3" onClick={handleYesCancel}>Yes</button>
            <button type="submit" className="red4" onClick={handleNoCancel}>No</button>
        </div>
        </div>
    </section>
      </>
    );
    }

    export default ConfirmCancel;