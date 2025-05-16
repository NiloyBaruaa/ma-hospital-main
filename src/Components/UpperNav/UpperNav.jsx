import logo from '../../assets/Logo-01.png';
import { Link } from 'react-router-dom';

const UpperNav = () => {
    return (
        <div className="navbar text-black flex justify-between w-full ">
            <div className="navbar-start">
                <img className='w-16 h-16 md:ml-6' src={logo} alt="" />
                <a className="ml-5 font-bold text-2xl">Ma General Hospital</a>
            </div>

            <div className="flex mt-3">
                {/* New Button */}
                <Link to="/adminDashboard">
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 mr-2 rounded">
                        Admin
                    </button>
                </Link>

                <div className="bg-red-600 text-sm text-white px-10 py-1">
                    <p className="mb-0">Emergency</p>
                    <p>0184578568</p>
                </div>

                <div className="bg-blue-950 text-sm text-white px-10 py-1">
                    <p>Appointment</p>
                    <p>01858469585</p>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;
