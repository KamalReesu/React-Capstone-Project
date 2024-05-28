import React from 'react';
import { useTheme } from "./ThemeContext";

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'This product really helped me increase productivity!',
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'Amazing service and support. Highly recommend!',
    location: 'London, UK'
  },
  {
    id: 3,
    name: 'Mark Y',
    testimonial: 'Amazing service and support. Highly recommend!',
    location: 'Ontario, Canada'
  },
];

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <>
      <br />
      <h1 className='testimonial-header' style={{ color: theme === "light" ? "black" : "white" }}>Testimonials</h1>
      <div className="testimonials-container" style={{ color: theme === "light" ? "black" : "white" }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h3 style={{ color: theme === "light" ? "black" : "white" }}>User Rating&nbsp;<i className="fa fa-star"></i></h3>
            <hr style={{ border: 1 + 'px solid' }} />
            <br />
            <img className='avatar' src={'https://ui-avatars.com/api/?name=' + testimonial.name} alt='avatar' />&nbsp;&nbsp;<span className="testimonial-author"> {testimonial.name}</span>
            <br />
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
