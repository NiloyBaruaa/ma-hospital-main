import { useLocation } from "react-router-dom";
import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { useEffect, useState } from "react";

const Appointments = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get("id"); // Extract the doctor ID from the query params

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Fetch doctors data
  useEffect(() => {
    fetch("/doctors.json") // Use root-relative path
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched doctors:", data.doctors); // Debugging
        setDoctors(data.doctors || []);
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Find selected doctor when doctors data is updated
  useEffect(() => {
    if (doctors.length > 0) {
      console.log("Doctor ID from query:", doctorId); // Debugging
      const doctor = doctors.find((doc) => doc.doctor_id === doctorId);
      console.log("Found doctor:", doctor); // Debugging
      setSelectedDoctor(doctor || null);
    }
  }, [doctors, doctorId]);

  console.log("Selected doctor:", selectedDoctor); // Debugging

  return (
    <div>
      <h1>Total Doctors: {doctors.length}</h1>
      {selectedDoctor ? (
        <ConsultationForm selectedDoctor={selectedDoctor} />
      ) : (
        <p>{doctors.length > 0 ? "Doctor not found" : "Loading doctor details..."}</p>
      )}
    </div>
  );
};

export default Appointments;
