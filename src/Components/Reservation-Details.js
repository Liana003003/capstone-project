/* This component is presenting the full details the user previously entered by using the imported
ReservationContext (this particular context is wrapped around App in Index.js). This page allows the user to edit,
cancel or finish the reservation */

import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { useNavigate } from "react-router-dom";

 function ReservationDetails() {
    const { reservation, resetReservation } = useContext(ReservationContext);
    console.log("Final reservation data:", reservation);
  const navigate = useNavigate();

   const handleConfirm = () => {
    resetReservation();
    window.scrollTo({ top: 180, behavior: "instant" });
     navigate("/tablereserved");
   };

   const handleEdit = () => {
    window.scrollTo({ top: 180, behavior: "instant" });
     navigate("/reservations1");
   }

   const handleCancel = () => {
    window.scrollTo({ top: 1020, behavior: "instant" });
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