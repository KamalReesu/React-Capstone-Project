import React from "react";
import BookingForm from "./BookingForm";
import { useTheme } from "./ThemeContext";

const Booking = (props) => {


    const { theme } = useTheme();
    return (
        <div id="reservation">
            <h1 style={{ color: theme === "light" ? "black" : "white" }}>Book your Table now !!!</h1>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
        </div>
    )
}

export default Booking;