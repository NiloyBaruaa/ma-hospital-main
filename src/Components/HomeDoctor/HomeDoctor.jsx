import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import { Link } from "react-router-dom";


const HomeDoctor = () => {
    const [doctors, setDoctors] = useState ([])
    useEffect(()=>{
        fetch ("doctors.json")
        .then(res=>res.json())
        .then(data=>setDoctors(data.doctors))
    },[]) 
    const slicedDoctor = doctors.slice(0,4)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center font-bold mt-9 text-5xl">Specialised Doctors</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5   mt-10">
       {
            slicedDoctor.map(doctor=><Doctor key={doctor.doctor_id} doctor={doctor}></Doctor>)
           }
       </div>
     
     <div className="flex justify-center mt-8">
     <button className="btn btn-primary mx-auto"><Link to={'/allDoctors'}>View More</Link></button>
     </div>
        </div>
    );
};

export default HomeDoctor;