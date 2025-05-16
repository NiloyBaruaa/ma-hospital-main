import food from '../../assets/goodfood.jpg'
import health from '../../../public/Services/JOY091482.jpg'
const FirstAid = () => {
    return (
     <div>
        <img className='w-full h-72' src={health} alt="" />
           <div className='flex'>
        <div className='w-1/2 text-black m-24'>
            <h1 className='text-4xl font-bold my-7'>Family Physician and First Aid</h1>
            <p>At MA General Hospital and Diagnostic Centre, we understand that health starts at home—and that’s where a family physician plays a vital role. A family physician is more than just a doctor; they are a trusted health partner who knows your medical history, understands your lifestyle, and provides continuous, comprehensive care for all members of the family, from children to the elderly. Whether it’s managing chronic illnesses, offering preventive advice, or treating everyday health issues, our family physicians are here to ensure your family’s well-being with compassion and expertise. In addition, we offer prompt and reliable first aid care for emergencies and minor injuries. Our trained professionals provide immediate attention to cuts, burns, sprains, allergic reactions, and other urgent situations—ensuring that quick, accurate treatment is always available when you need it most. Your family’s health and safety are our top priorities, and we are proud to be your first line of care.</p>
          
         
        </div>
        <div className='w-1/2 m-24'>
            <img src={food} alt="" />
        </div>
    </div>
     </div>
    );
};

export default FirstAid;