import { createContext, useState } from "react";


export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservation, setReservation] = useState({
    resname: "",
    resemail: "",
    resphone: "",
    resoccasion: "",
    resguests: "",
    resdate: "",
    restime: "",
    respreferences: "",
  });

  const updateReservation = (data) => {
  setReservation((prev) => ({ ...prev, ...data }));
};

const resetReservation = () => {
    setReservation({});
  };

  return (
    <ReservationContext.Provider value={{ reservation, updateReservation, resetReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
