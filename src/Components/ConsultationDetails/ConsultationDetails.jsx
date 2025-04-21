import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./style.css";

const ConsultationDetails = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  const [reservations, setReservations] = useState([]);
  const [todayReservations, setTodayReservations] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const patientData = JSON.parse(localStorage.getItem("patientData")) || [];
    setReservations(patientData);

    const today = new Date();
    const todayFormatted = moment(today).format("YYYY-MM-DD");

    const todaysBooking = patientData.filter((reservation) => {
      const bookingDate = moment(reservation.bookingDate).format("YYYY-MM-DD");
      return bookingDate === todayFormatted;
    });

    const sortedBooking = todaysBooking.sort(
      (a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)
    );
    setTodayReservations(sortedBooking);
    setCurrentPage(1); // 👈🏽 Don't forget this
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredReservations = reservations.filter(
    (reservation) =>
      moment(reservation.consultationDate).format("YYYY-MM-DD") ===
      moment(selectedDate).format("YYYY-MM-DD")
  );

  // ✅ Add this helper function to get updated data for today
  const getTodayReservations = (data) => {
    const today = new Date();
    const todayFormatted = moment(today).format("YYYY-MM-DD");
    return data.filter((reservation) => {
      const bookingDate = moment(reservation.bookingDate).format("YYYY-MM-DD");
      return bookingDate === todayFormatted;
    });
  };

  // ✅ Add this function inside your component
  const handleDelete = (indexToDelete) => {
    const updatedReservations = reservations.filter(
      (_, index) => index !== indexToDelete
    );
    setReservations(updatedReservations);
    setTodayReservations(getTodayReservations(updatedReservations));
    localStorage.setItem("patientData", JSON.stringify(updatedReservations));
  };

  const handleApprove = (indexToApprove) => {
    const updatedReservations = reservations.map((res, index) =>
      index === indexToApprove ? { ...res, status: "Approved" } : res
    );
    setReservations(updatedReservations);
    setTodayReservations(getTodayReservations(updatedReservations));
    localStorage.setItem("patientData", JSON.stringify(updatedReservations));
  };

  const handleDecline = (indexToDecline) => {
    const updatedReservations = reservations.map((res, index) =>
      index === indexToDecline ? { ...res, status: "Canceled" } : res
    );
    setReservations(updatedReservations);
    setTodayReservations(getTodayReservations(updatedReservations));
    localStorage.setItem("patientData", JSON.stringify(updatedReservations));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReservations = todayReservations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(todayReservations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex ">
      {/* Drawer Section */}
      <div className=" lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>
                <Link to={"/adminDashboard"}>Dashboard</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/admin-appointment-page"}>Appointment</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Section */}
      {/* Main Content Section */}
      <div className="flex-grow py-10  flex justify-between mx-20">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-10 text-black">
            Consultation Details
          </h1>

          {/* Show today's reservations */}
          <section>
            <h2 className="text-2xl font-bold text-center text-black mb-6">
              Today's Reservations
            </h2>
            {todayReservations.length === 0 ? (
              <p className="text-center">No reservations made today.</p>
            ) : (
              <div className="w-full">
                <table className="min-w-full border-collapse border text-center">
                  <thead>
                    <tr className="text-black">
                      <th className="border border-gray-400 px-4 py-2">
                        Patient Name
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Consultation Date
                      </th>
                      <th className="border border-gray-400 px-4 py-2">Time</th>
                      <th className="border border-gray-400 px-4 py-2">Type</th>
                      <th className="border border-gray-400 px-4 py-2">
                        Doctor
                      </th>

                      <th className="border border-gray-400 px-4 py-2">
                        Status
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Actions
                      </th>
                      <th className="border border-gray-400 px-4 py-2">A/D</th>
                      <th className="border border-gray-400 px-4 py-2">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReservations.map((reservation, index) => (
                      <tr key={index} className="hover:bg-gray-100 text-black">
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.patientName}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.consultationDate}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.consultationTime}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.consultationType}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.doctor}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.mobile}
                        </td>

                        {/* ✅ Status Column */}
                        <td className="border border-gray-400 px-4 py-2">
                          {reservation.status === "Approved" ? (
                            <span className="text-green-600 font-semibold">
                              Approved
                            </span>
                          ) : reservation.status === "Canceled" ? (
                            <span className="text-red-600 font-semibold">
                              Canceled
                            </span>
                          ) : (
                            <span className="text-yellow-600 font-semibold">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* ✅ Approve/Decline Column */}
                        <td className="border border-gray-400 px-4 py-2 space-x-2">
                          <button
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            onClick={() => handleApprove(index)}
                          >
                            Approve
                          </button>
                          <button
                            id="decline"
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                            onClick={() => handleDecline(index)}
                          >
                            Decline
                          </button>
                        </td>

                        {/* ✅ Separate Delete Column */}
                        <td className="border border-gray-400 px-4 py-2">
                          <button
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 border rounded ${
                        currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ConsultationDetails;
