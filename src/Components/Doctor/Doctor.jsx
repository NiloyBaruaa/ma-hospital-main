import { Link } from "react-router-dom";
import './Doctor.css'


const Doctor = ({ doctor }) => {
    const { doctor_id, doctor_name, doctor_degree, doctor_image, doctor_specialist, visiting_hour } = doctor;
    console.log(doctor_id);

   
        
        // You can perform any actions here such as setting state or navigating to another page
        // Example: navigate to the Appointments page with name or doctor details as params


    return (
        <div className="flex items-center border-2 border-blue-300 bg-white rounded-2xl shadow-lg text-black p-5 mt-16 hover:shadow-2xl transition duration-300 ease-in-out">
        <div className="flex items-center gap-6 w-3/4">
            <div className="m-1 w-1/2">
                <img
                    id="doctorImage"
                    src={doctor_image}
                    alt={doctor_name}
                    className="rounded-xl w-full h-auto object-contain shadow-md"
                />
            </div>
            <div className="w-1/2 space-y-1">
                <h2 id="doctor_name" className="text-xl font-bold text-blue-700">{doctor_name}</h2>
                <p className="text-sm text-gray-600">{doctor_degree}</p>
                <p className="text-base text-gray-700">{doctor_specialist}</p>
            </div>
        </div>
    
        <div id="vertical-lines" className="w-0.5 bg-blue-300 h-32 mx-4 hidden md:block"></div>
    
        <div className="text-center w-1/4">
            <p className="text-sm font-medium text-gray-700">{visiting_hour}</p>
            <div className="flex justify-center mt-5">
                <button className="btn bg-blue-500 hover:bg-blue-600 mx-7 text-white text-sm px-6 py-2 rounded-3xl shadow-md transition duration-200">
                    <Link to={`/appointment/${doctor_id}?id=${doctor_id}`}>
                        Appointment
                    </Link>
                </button>
            </div>
        </div>
    </div>
    
    );
};

export default Doctor;
