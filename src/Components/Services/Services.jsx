import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <div className="mt-48 w-full ">
            <h1 className="text-6xl font-bold text-center">Our Services</h1>


            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-10">
                {
                    services.map(service => <Service key={service.services_id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;