import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
        // Retrieve existing data from localStorage
        const patientData = JSON.parse(localStorage.getItem("patientData")) || [];

        // Filter appointments based on selected date
        const selectedDateFormatted = moment(selectedDate).format("YYYY-MM-DD");
        const filtered = patientData.filter((reservation) => {
            const consultationDate = moment(reservation.consultationDate).format("YYYY-MM-DD");
            return consultationDate === selectedDateFormatted;
        });

        setAppointments(patientData); // Store all appointments
        setFilteredAppointments(filtered); // Store filtered appointments for the selected date
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date); // Update selected date
    };

    return (
        <section className="flex">
            <div className="drawer lg:drawer-open w-1/2">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><a><Link to={'/adminDashboard'}>Dashboard</Link></a></li>
                        <li><a><Link to={'/admin-appointment-page'}>Appointment</Link></a></li>
                    </ul>
                </div>
            </div>

            <div className="text-black p-10">
                <h1 className="text-4xl font-bold text-center mb-10">Appointments</h1>

                <section className="calendar-container flex justify-center mb-10">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </section>

                <section className="appointments-list">
                    <h2 className="text-2xl font-bold mb-5">Appointments for {moment(selectedDate).format("MMMM D, YYYY")}:</h2>

                    {filteredAppointments.length === 0 ? (
                        <p>No appointments for this date.</p>
                    ) : (
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Patient Name</th>
                                    <th className="border px-4 py-2">Consultation Time</th>
                                    <th className="border px-4 py-2">Doctor</th>
                                    <th className="border px-4 py-2">Sex</th>
                                    <th className="border px-4 py-2">Mobile</th>
                                    <th className="border px-4 py-2">Email</th>
                                    <th className="border px-4 py-2">Date of Birth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAppointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{appointment.patientName}</td>
                                        <td className="border px-4 py-2">{appointment.consultationTime}</td>
                                        <td className="border px-4 py-2">{appointment.doctor}</td>
                                        <td className="border px-4 py-2">{appointment.sex}</td>
                                        <td className="border px-4 py-2">{appointment.mobile}</td>
                                        <td className="border px-4 py-2">{appointment.email}</td>
                                        <td className="border px-4 py-2">{appointment.dateOfBirth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </div>
        </section>
    );
};

export default AppointmentPage;
