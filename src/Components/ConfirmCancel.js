import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { useNavigate } from "react-router-dom";

 function ConfirmCancel() {
  const { reservation } = useContext(ReservationContext);
    console.log("Final reservation data:", reservation);
  const navigate = useNavigate();

   const handleYesCancel = () => {
     navigate("/tablecancelled");
   };

   const handleNoCancel = () => {
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
        <div className="reservation-form3">
            <div className="details-name-container1">
            <div className="details-name">
                <div className="part1">
                    <p>Full Name</p>
                </div>
                <div className="part2">
                    <p>{reservation.resname}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Email</p>
                </div>
                <div className="part2">
                    <p>{reservation.resemail}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Phone Number</p>
                </div>
                <div className="part2">
                    <p>{reservation.resphone}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Occasion</p>
                </div>
                <div className="part2">
                    <p>{reservation.resoccasion}</p>
                </div>
            </div>
            </div>
            <hr></hr>
            <div className="details-name-container2">
            <div className="details-name">
                <div className="part1">
                    <p>Number of Guests</p>
                </div>
                <div className="part2">
                    <p>{reservation.resguests}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Date</p>
                </div>
                <div className="part2">
                    <p>{reservation.resdate}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Time</p>
                </div>
                <div className="part2">
                    <p>{reservation.restime}</p>
                </div>
            </div>
            <div className="details-name">
                <div className="part1">
                    <p>Additional Preferences</p>
                </div>
                <div className="part2">
                    <p>{reservation.respreferences}</p>
                </div>
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