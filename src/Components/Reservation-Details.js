import { useNavigate } from "react-router-dom";
 
 function ReservationDetails() {
  const navigate = useNavigate();
 
   const handleConfirm = () => {
     // (Optional) your form submission logic here
     navigate("/tablereserved");
   };

   const handleEdit = () => {
     // (Optional) your form submission logic here
     navigate("/reservations1");
   }

   const handleCancel = () => {
     // (Optional) your form submission logic here
     navigate("/confirmcancel");
   }

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
            <p>Are your details correct?</p>
        </div>
        <div className="red-duo">
            <button type="submit" className="red1" onClick={handleEdit}>Edit</button>
            <button type="submit" className="red2" onClick={handleCancel}>Cancel</button>
        </div>
      <button type="submit" className="reserve-button" onClick={handleConfirm}>Reserve</button>
      </div>
    </section>
      </>
    );
    }

    export default ReservationDetails;