import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patientData")) || [];
    if (data.length > 0) {
      setBookingDetails(data[data.length - 1]);
    } else {
      navigate("/"); // Redirect to home if no data is found
    }
  }, [navigate]);

  if (!bookingDetails) {
    return null;
  }

  const {
    patientName,
    birthDate,
    sex,
    mobile,
    email,
    doctor,
    specialty,
    consultationDate,
    consultationTime,
    consultationType,
    bookingDate,
  } = bookingDetails;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <>
        <style>
          {`
      @media print {
        body * {
          visibility: hidden;
        }

        .print-area, .print-area * {
          visibility: visible;
        }

        .print-area {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
      }
    `}
        </style>
        {/* Your component JSX */}
      </>

      <div className="bg-white print-area shadow-lg rounded-lg p-8 w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Booking Confirmed!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Thank you for booking your appointment. Here are your details:
        </p>
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Patient Name:</span>
            <span className="text-gray-700">{patientName}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Date of Birth:</span>
            <span className="text-gray-700">
              {new Date(birthDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Sex:</span>
            <span className="text-gray-700">{sex}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Mobile:</span>
            <span className="text-gray-700">{mobile}</span>
          </div>
          {email && (
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-700">{email}</span>
            </div>
          )}
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Doctor:</span>
            <span className="text-gray-700">{doctor}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Specialty:</span>
            <span className="text-gray-700">{specialty}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">
              Consultation Date:
            </span>
            <span className="text-gray-700">
              {new Date(consultationDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">
              Consultation Time:
            </span>
            <span className="text-gray-700">{consultationTime}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">
              Consultation Type:
            </span>
            <span className="text-gray-700">
              {consultationType || "Not specified"}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Booking Date:</span>
            <span className="text-gray-700">
              {new Date(bookingDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => window.print()}
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700 transition-all mr-4"
          >
            Print Memo
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
