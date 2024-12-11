import { FaStar } from "react-icons/fa";
import axios from "axios";
import vendorAvatar from "../../assests/vendorAvatar.png";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TechnicianCarousel = ({ technicianSpecialization }) => {
  const [technicians, setTechnicians] = useState([]);
  const [chunkSize, setChunkSize] = useState(3); // Default for large screens

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const endpoint = technicianSpecialization
          ? `http://localhost:5000/api/technicians?specialization=${technicianSpecialization}`
          : `http://localhost:5000/api/technicians`;
        const response = await axios.get(endpoint);
        setTechnicians(response.data);
      } catch (error) {
        console.error("Error fetching technicians", error);
      }
    };
    fetchTechnicians();

    const updateChunkSize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1); // 1 card for mobile
      } else if (window.innerWidth < 992) {
        setChunkSize(2); // 2 cards for tablets
      } else {
        setChunkSize(3); // 3 cards for desktops
      }
    };

    window.addEventListener("resize", updateChunkSize);
    updateChunkSize(); // Initial check

    return () => window.removeEventListener("resize", updateChunkSize);
  }, [technicianSpecialization]);

  const chunkTechnicians = (size) => {
    const chunks = [];
    for (let i = 0; i < technicians.length; i += size) {
      chunks.push(technicians.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Featured Vendors</h1>
      <div
        id="technicianCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunkTechnicians(chunkSize).map((chunk, index) => (
            <div
              key={`chunk-${index}`}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {chunk.map((technician) => (
                  <div key={technician.id} className="col-12 col-md-6 col-lg-4">
                    <div className="card p-3 text-center">
                      <img
                        src={vendorAvatar}
                        alt={technician.name}
                        className="card-img-top rounded-circle mx-auto"
                        style={{ width: "5rem", height: "5rem" }}
                      />
                      <h5 className="mt-3">{technician.name}</h5>
                      <p className="text-muted">{technician.specialization}</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <FaStar className="text-warning me-2" />
                        <span>{technician.rating}/10</span>
                        <span className="text-muted ms-2">
                          ({technician.reviews} reviews)
                        </span>
                      </div>
                      <p className="mt-3">{technician.description}</p>
                      <button className="btn btn-primary mt-2">Contact</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#technicianCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "blue",
              padding: "2em",
              position: "absolute",
              left: "-80px",
            }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#technicianCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "blue",
              padding: "2em",
              position: "absolute",
              right: "-80px",
            }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TechnicianCarousel;
