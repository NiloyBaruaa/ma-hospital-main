import { useState, useEffect } from "react"; 
import moment from "moment";
import { Link } from "react-router-dom";

const DashboardPage = () => {
    const [todayReservations, setTodayReservations] = useState([]);

    useEffect(() => {
        // Retrieve existing data from localStorage
        const patientData = JSON.parse(localStorage.getItem("patientData")) || [];

        // Get today's date
        const today = new Date();
        const todayFormatted = moment(today).format("YYYY-MM-DD");

        console.log("Patient Data: ", patientData); // Check the structure of the stored data
        console.log("Today: ", todayFormatted); // Check today's date
        
        // Filter today's confirmed reservations based on booking date and consultation date (today's date)
        const todaysBooking = patientData.filter((reservation) => {
            const bookingDate = moment(reservation.bookingDate).format("YYYY-MM-DD");
            const consultationDate = moment(reservation.consultationDate).format("YYYY-MM-DD");
            
            console.log("Booking Date: ", bookingDate); // Check the booking date
            console.log("Consultation Date: ", consultationDate); // Check the consultation date

            // Ensure the consultationDate matches today's date and reservation is confirmed
            return bookingDate === todayFormatted && consultationDate === todayFormatted;
        });

        setTodayReservations(todaysBooking);
    }, []);

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
                <h1 className="text-4xl font-bold text-center mb-10">Dashboard</h1>

                <section className="today-reservations mb-10">
                    <h2 className="text-2xl font-bold mb-5">Today's Reservations:</h2>

                    {todayReservations.length === 0 ? (
                        <p>No reservations made today.</p>
                    ) : (
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Patient Name</th>
                                    <th className="border px-4 py-2">Consultation Date</th>
                                    <th className="border px-4 py-2">Consultation Time</th>
                                    <th className="border px-4 py-2">Doctor</th>
                                    <th className="border px-4 py-2">Sex</th>
                                    <th className="border px-4 py-2">Mobile</th>
                                    <th className="border px-4 py-2">Email</th>
                                    <th className="border px-4 py-2">Date of Birth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todayReservations.map((reservation, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{reservation.patientName}</td>
                                        <td className="border px-4 py-2">{reservation.consultationDate}</td>
                                        <td className="border px-4 py-2">{reservation.consultationTime}</td>
                                        <td className="border px-4 py-2">{reservation.doctor}</td>
                                        <td className="border px-4 py-2">{reservation.sex}</td>
                                        <td className="border px-4 py-2">{reservation.mobile}</td>
                                        <td className="border px-4 py-2">{reservation.email}</td>
                                        <td className="border px-4 py-2">{reservation.dateOfBirth}</td>
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

export default DashboardPage;
