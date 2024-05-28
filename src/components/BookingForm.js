import { useState } from "react";


function BookingForm(props) {


    // { Another way of storing form data /** Please don't consider this */ }

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     console.log(e);
    //     setReservationDetails(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };
    // function bookTable(e){
    //     //e.preventDefault();
    //     console.log(reserveTable);
    // }
    // const [reserveTable,setReservationDetails]=useState( { bookingid: 0, bookingdate: "", bookingtime:"",noofguests:0,occasion:"" });


    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleValidation = (e) => {
        return (
            occasion && guests >= 1 && date && times
        );
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSumbit}>
                    <fieldset className="formField">
                        <label htmlFor="book-date">Choose date</label>
                        <input type="date" name="bookingdate" value={date} onChange={(e) => handleChange(e.target.value)} required />
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => { setGuests(e.target.value) }} type={"number"} placeholder={0} max={10} required></input>
                            <span style={{ marginLeft: 1 + 'rem' }}>{<i>Note: Min Guests should be more 1 or more </i>}</span>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <button disabled={!handleValidation()} type={"submit"} >Make Your Reservation</button>
                        </div>
                    </fieldset>
                </form>
            </section >
        </header>
    );
}

export default BookingForm;