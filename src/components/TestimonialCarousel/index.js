import React from "react";
import stars from "../../assests/stars3.png";
import customerAvatar from "../../assests/customerAvatar.png";
import "./index.css";

const testimonials = [
  {
    id: 1,
    name: "Peter Bres",
    rating: 4,
    comment:
      "Knowledgeable and easy to work with. They make instructions easy for those of us who aren't that savvy. Growth has been great and the followers have been quality.",
    image: customerAvatar,
  },
  {
    id: 2,
    name: "John Smith",
    rating: 5,
    comment:
      "Excellent service! The technician arrived on time and fixed my refrigerator quickly. I am very impressed with the professionalism and expertise.",
    image: customerAvatar,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 4,
    comment:
      "Great experience overall. The booking process was easy, and the technician was friendly and knowledgeable. Would definitely use their services again.",
    image: customerAvatar,
  },
];

function TestimonialCarousel() {
  return (
    <div className="testimonial-carousel">
      <h1>See what our happy customers have to say about us</h1>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <div className="testimonial-rating">
              <img src={stars} alt="rating" />
            </div>
            <p className="testimonial-comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
