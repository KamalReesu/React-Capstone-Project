import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = (props) => {



    return (
        <div id="#reservation">
        <h1 style={{'marginLeft':3+'rem'}}>Book a Table</h1>
        <br/>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
    )
}

export default Booking;