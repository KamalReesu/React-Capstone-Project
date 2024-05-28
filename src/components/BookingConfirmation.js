import React from "react";

const BookingConfirmation = () => {
    return (
        <div className="confirmed-booking">
            <h3><i className="fa fa-info-circle" style={{ color: 'black' ,fontSize:25+'px'}}></i>&nbsp;Your reservation has been confirmed.</h3>
            <p style={{marginLeft:2+'%'}}>You will receive an email with all the details.</p>
        </div>
    );
}

export default BookingConfirmation;