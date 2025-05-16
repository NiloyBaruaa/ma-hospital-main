
import food from '../../assets/hhhhh.jpg'
import health from '../../../public/Services/JOY091482.jpg'
const HealthAndWellness = () => {
    return (
     <div>
        <img className='w-full h-72' src={health} alt="" />
           <div className='flex'>
        <div className='w-1/2 text-black m-24'>
            <h1 className='text-4xl font-bold my-7'>Health and Wellness</h1>
            <p>Health and wellness go beyond simply avoiding illness—they encompass a balanced lifestyle that promotes physical vitality, mental clarity, and emotional resilience. At MA General Hospital and Diagnostic Centre, we believe that true wellness is achieved through a proactive and holistic approach to daily living. This includes eating nutritious foods, exercising regularly, getting adequate rest, and attending routine health checkups. Equally important are mental and emotional well-being—managing stress, staying socially connected, and nurturing a positive mindset. Our hospital is dedicated to supporting your journey with comprehensive diagnostic services, personalized medical care, and health education programs that empower you to make informed decisions. By focusing on prevention and early detection, we aim to help every patient lead a healthier, more fulfilling life. Your wellness is our priority, and we are here to guide you every step of the way.</p>
          
         
        </div>
        <div className='w-1/2 m-24'>
            <img src={food} alt="" />
        </div>
    </div>
     </div>
    );
};

export default HealthAndWellness;