import food from '../../assets/diagnstic.jpeg'
import health from '../../../public/Services/JOY091482.jpg'
const Diagnostics = () => {
    return (
     <div>
        <img className='w-full h-72' src={health} alt="" />
           <div className='flex'>
        <div className='w-1/2 text-black m-24'>
            <h1 className='text-4xl font-bold my-7'>Diagnostics</h1>
            <p>At MA General Hospital and Diagnostic Centre, we believe that accurate diagnosis is the foundation of effective treatment. That’s why our diagnostic services are equipped with the latest technology and operated by skilled professionals dedicated to delivering fast, precise, and reliable results. From routine blood tests and urine analysis to advanced imaging services like ultrasonography, ECG, X-ray, and more, we cover a wide range of diagnostic needs under one roof. Early detection of health issues can save lives, and our goal is to provide patients with clear insights into their health status—enabling timely intervention and better health outcomes. Whether you’re coming in for a routine check-up or a specialist-recommended test, our diagnostic centre ensures your comfort, safety, and confidentiality at every step. Trust us to be your partner in health, delivering quality diagnostics with care and commitment.</p>
          
         
        </div>
        <div className='w-1/2 m-24'>
            <img src={food} alt="" />
        </div>
    </div>
     </div>
    );
};

export default Diagnostics;