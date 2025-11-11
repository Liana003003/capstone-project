import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { initializeTimes } from "./App";
import { updateTimes } from "./App";
import { ReservationContext } from "./context/ReservationContext";
import Reservations1 from './Components/Reservations1';
import Reservations2 from "./Components/Reservations2";
import { AvailableTimesContext } from "./context/AvailableTimesContext";

test('Renders the Reservations1 heading', () => {
    const mockContextValue = {
        reservation: {resname: "",
    resemail: "",
    resphone: "",
    resoccasion: "",
    resguests: "",
    resdate: "",
    restime: "",
    respreferences: ""},

    updateReservation: jest.fn(),
    };

    render(
    <MemoryRouter>
        <ReservationContext.Provider value={mockContextValue}>
        <Reservations1 />
        </ReservationContext.Provider>
    </MemoryRouter>
        );
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('Check that initializeTimes() returns the correct expected value', async () => {

    const randomImaginaryTimes = ["14:00", "15:00", "16:00", "17:00"];

    window.fetchAPI = jest.fn();

    window.fetchAPI.mockResolvedValue(randomImaginaryTimes);

    const result = await initializeTimes();

    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date))
    expect(result).toEqual(randomImaginaryTimes);
});

test("Validate that updateTimes() returns same value that is provided in state", () => {
  const firstState = [
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "18:00", "18:30", "19:00",
    "19:30", "20:00", "20:30", "21:00"];

    const action = { type: "random_action"};

    const state = updateTimes(firstState, action);

    expect(state).toEqual(firstState);
});

test("Check that the form can be submitted by the user", () => {
    const mockContextValue = {
        reservation: {resname: "",
    resemail: "",
    resphone: "",
    resoccasion: "",
    resguests: "",
    resdate: "",
    restime: "",
    respreferences: ""},

    updateReservation: jest.fn(),
    };

    const mockContextValue2 = {
        availableTimes: [
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "18:00", "18:30", "19:00",
    "19:30", "20:00", "20:30", "21:00"
    ],
    dispatch: jest.fn(),
    };

    const handleConfirm = jest.fn();

    render(
    <MemoryRouter>
        <ReservationContext.Provider value={mockContextValue}>
          <AvailableTimesContext.Provider value={mockContextValue2}>
             <Reservations2 onSubmit={handleConfirm}/>
           </AvailableTimesContext.Provider>
        </ReservationContext.Provider>
    </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Number of Guests *"), {target: {value: "4"}});

    fireEvent.change(screen.getByLabelText("Date *"), {target: {value: "2025-11-11"}});

    fireEvent.change(screen.getByLabelText("Time *"), {target: {value: "14:00"}});

    const btn = screen.getByText(/Confirm/i);
    fireEvent.click(btn);

    expect(handleConfirm).toHaveBeenCalledTimes(1);

    expect(handleConfirm).toHaveBeenCalledWith({
        resguests: "4",
        resdate: "2025-11-11",
        restime: "14:00",
        respreferences: "",
    })
;})