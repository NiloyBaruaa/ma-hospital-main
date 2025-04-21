import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import health from "../../assets/healthwellness.webp";

const ConsultationForm = ({ selectedDoctor }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    birthDate: "",
    sex: "",
    mobile: "",
    email: "",
    doctor: "",
    specialty: "",
    consultationDate: "",
    consultationTime: "",
    consultationType: "",
    bookingDate: new Date(), // Default to today's date
  });

  const [availableDays, setAvailableDays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDoctor) {
      setAvailableDays(selectedDoctor.doctor_day || []);
    }
  }, [selectedDoctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      consultationDate: date,
    }));
  };

  const handleBirthDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      birthDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      doctor: selectedDoctor?.doctor_name || "",
      specialty: selectedDoctor?.doctor_specialist || "",
      bookingDate: new Date().toISOString(), // Capture the current date and time
    };

    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("patientData")) || [];
    // Append the new data
    const updatedData = [...existingData, updatedFormData];
    // Save back to localStorage
    localStorage.setItem("patientData", JSON.stringify(updatedData));

    // Navigate to ConsultationDetails page
    navigate("/confirmation");
  };

  const isAvailableDay = (date) => {
    const dayOfWeek = date.getDay();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = weekdays[dayOfWeek];
    return availableDays.includes(dayName);
  };

  return (
    <section>
      <div>
        <img className="w-full h-72" src={health} alt="Health and Wellness" />
        <h1 className="text-center text-5xl text-black m-5 font-bold">
          Book your Appointment Now
        </h1>
      </div>
      <div
        style={{ padding: "20px" }}
        className="text-black border-4 border-black m-10"
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Patient Name :</h1>
            <input
              className="bg-white text-black border-2 w-full"
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Date Of Birth :</h1>
            <DatePicker
              selected={formData.birthDate}
              onChange={handleBirthDateChange}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              className="bg-white text-black border-2 w-full"
              required
            />
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Sex :</h1>
            <select
              className="bg-white w-full text-black border-2"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Mobile :</h1>
            <input
              className="bg-white text-black border-2 w-full"
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Email :</h1>
            <input
              className="bg-white text-black w-full border-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {selectedDoctor && (
            <>
              <label className="flex gap-8">
                <h1 className="text-3xl w-1/2">Doctor :</h1>
                <input
                  name="doctor"
                  className="bg-white w-full text-black border-2"
                  value={selectedDoctor.doctor_name}
                  readOnly
                />
              </label>

              <label className="flex gap-8">
                <h1 className="text-3xl w-1/2">Specialty :</h1>
                <input
                  className="bg-white w-full text-black border-2"
                  type="text"
                  name="specialty"
                  readOnly
                  value={selectedDoctor.doctor_specialist}
                />
              </label>
            </>
          )}

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Select Consultation Date :</h1>
            <DatePicker
              selected={formData.consultationDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              filterDate={isAvailableDay}
              placeholderText="Select a date"
              className="bg-white text-black border-2 w-full"
              required
            />
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Time :</h1>
            <select
              className="bg-white w-full text-black border-2"
              name="consultationTime"
              value={formData.consultationTime}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="9:00am - 11:00am">9:00am - 11:00am</option>
              <option value="11:00am - 1:00pm">11:00am - 1:00pm</option>
              <option value="1:00pm - 3:00pm">1:00pm - 3:00pm</option>
              <option value="3:00pm - 5:00pm">3:00pm - 5:00pm</option>
            </select>
          </label>

          <label className="flex gap-8">
            <h1 className="text-3xl w-1/2">Patient Type :</h1>
            <select
              className="bg-white w-full text-black border-2"
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="New">New</option>
              <option value="Followup">Followup</option>
              <option value="Report">Report</option>
            </select>
          </label>

          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
