import React from "react";
import appilanceDetails from "../../assests/appilanceDetails.png";
import technician from "../../assests/technician.png";
import getItFixed from "../../assests/getItFixed.png";
import "./index.css";

const BookingSteps = () => {
  const steps = [
    {
      imgSrc: appilanceDetails,
      altText: "Step 1",
      title: "Provide your appliance details",
      description: "Let us know your appliance details and your issue.",
    },
    {
      imgSrc: technician,
      altText: "Step 2",
      title: "Choose your technician",
      description: "Choose from a wide variety of technicians and vendors.",
    },
    {
      imgSrc: getItFixed,
      altText: "Step 3",
      title: "Get it fixed!",
      description:
        "The technician will arrive at your doorstep shortly to fix it!",
    },
  ];

  return (
    <section className="booking-section">
      <div className="container">
        <h2 className="title">Book a request in 3 simple steps</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <img src={step.imgSrc} alt={step.altText} className="step-img" />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
