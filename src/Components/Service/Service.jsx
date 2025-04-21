

const Service = ({service}) => {
    const {services_id,services_name,services_img} = service;
    console.log(services_id);
    
    return (
        <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 ... w-96 shadow-xl mx-7 my-4 border ">
        <figure>
          <img
            src={services_img}
            alt="Shoes"
            className=" w-full h-48" />
        </figure>
        <div className="py-2 items-center text-center">
          <h2 className="text-3xl font-bold text-white">{services_name}</h2>

        </div>
      </div>
    );
};

export default Service;