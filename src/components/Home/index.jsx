import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import landingImage from "../../assests/landingImage.png";
import axios from "axios";
import "./index.css";
import Services from "../Services";
import BookingSteps from "../BookingSteps";
import TechnicianCarousel from "../TechnicianCarousel";
import TestimonialCarousel from "../TestimonialCarousel";
import Footer from "../Footer";

const Home = () => {
  const [locations, setLocations] = useState([{ id: 1, name: "Pune" }]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAppliance, setSelectedAppliance] = useState("");
  const [appliances, setAppliances] = useState([]);
  const [technicianSpecialization, setTechnicianSpecialization] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => console.error("Error fetching locations", error));
  }, []);

  useEffect(() => {
    if (selectedAppliance) {
      axios
        .get(`http://localhost:5000/api/appliances?query=${selectedAppliance}`)
        .then((response) => {
          setAppliances(response.data);
        })
        .catch((error) => console.error("Error fetching appliances", error));
    } else {
      setAppliances([]);
    }
  }, [selectedAppliance]);

  useEffect(() => {
    if (
      selectedAppliance &&
      appliances.some((appliance) => appliance.name === selectedAppliance)
    ) {
      setAppliances([]);
    }
  }, [selectedAppliance, appliances]);

  const toggleLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const updateAppliance = (event) => {
    setSelectedAppliance(event.target.value);
  };

  const handleApplianceSelect = (appliance) => {
    setSelectedAppliance(appliance.name);
    setAppliances([]);
  };

  const updateTechnicians = (event) => {
    event.preventDefault();
    setAppliances([]);
    setTechnicianSpecialization(selectedAppliance);
  };

  return (
    <>
      <Navbar />
      <div className="home-section">
        <div className="intro-section">
          <div>
            <h1>Take care of your home needs now!</h1>
            <p>
              ServicePro is your one-stop solution to troubleshoot, choose a
              vendor and book a technician.
            </p>
            <select
              onChange={toggleLocation}
              value={selectedLocation}
              className="select-location"
            >
              {locations.map((eachLocation) => (
                <option key={eachLocation.id} value={eachLocation.id}>
                  {eachLocation.name}
                </option>
              ))}
            </select>
            <form onSubmit={updateTechnicians} className="search-bar-container">
              <div>
                <div className="input-search-bar-container">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3933 14.3933L12.1267 12.1267"
                      stroke="#ADB5BD"
                      strokeWidth="0.64"
                      strokeLinecap="square"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.14 12.1267C9.89406 12.1267 12.1267 9.89408 12.1267 7.14002C12.1267 4.38596 9.89406 2.15335 7.14 2.15335C4.38594 2.15335 2.15333 4.38596 2.15333 7.14002C2.15333 9.89408 4.38594 12.1267 7.14 12.1267Z"
                      fill="#ADB5BD"
                    />
                    <path
                      d="M7.14001 5.32669V8.95336"
                      stroke="white"
                      strokeWidth="0.64"
                      strokeLinecap="square"
                    />
                    <path
                      d="M8.95334 7.14003H5.32667"
                      stroke="white"
                      strokeWidth="0.64"
                      strokeLinecap="square"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search Home Appliances"
                    value={selectedAppliance}
                    onChange={updateAppliance}
                  />
                </div>
                {appliances.length > 0 && (
                  <ul>
                    {appliances.map((appliance) => (
                      <li
                        key={appliance.id}
                        className="appliance-item"
                        onClick={() => handleApplianceSelect(appliance)} // Handle suggestion click
                      >
                        {appliance.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
          <img src={landingImage} alt="landing" className="landing-img" />
        </div>
        <Services />
        <BookingSteps />
        <TechnicianCarousel
          technicianSpecialization={technicianSpecialization}
        />
        <TestimonialCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
