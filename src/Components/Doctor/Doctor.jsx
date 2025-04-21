import { Link } from "react-router-dom";
import './Doctor.css'


const Doctor = ({ doctor }) => {
    const { doctor_id, doctor_name, doctor_degree, doctor_image, doctor_specialist, visiting_hour } = doctor;
    console.log(doctor_id);

   
        
        // You can perform any actions here such as setting state or navigating to another page
        // Example: navigate to the Appointments page with name or doctor details as params


    return (
        <div className="flex items-center border-2 border-blue-300 text-black p-5 ">
            <div className="flex items-center gap-2">
                <div className="m-1 w-1/2">
                    <img id="doctorImage" src={doctor_image} alt={doctor_name} />
                </div>
                <div className=" w-1/4">
                    <h2 id="doctor_name">{doctor_name}</h2>
                    <p className="tet-sm">{doctor_degree}</p>
                    <p>{doctor_specialist}</p>
                </div>
            </div>

            <div id="vertical-lines" className="w-0.5 bg-blue-300 h-full"></div>

            <div>
                {visiting_hour}
                <div className="flex justify-center mt-5">
                    <button className="btn btn-primary mx-7 text-white rounded-3xl">
                        {/* Pass an anonymous function to onClick */}
                        <Link
                        className="text-sm" 
                            to={`/appointment/${doctor_id}?id=${doctor_id}`}>
                            Appointment
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
