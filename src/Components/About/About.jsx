import banner from '../../../public/About/JOY08673-22.jpg';
import logo from '../../assets/Logo-01.png';

const About = () => {
    return (
        <div className='text-black bg-gradient-to-b from-white to-blue-50 pt-5'>
            <img
                className='w-full h-[70vh] object-cover rounded-b-3xl shadow-lg'
                src={banner}
                alt=""
            />
            <div className='mx-32 mb-24 bg-white bg-opacity-90 p-10 rounded-xl shadow-md mt-10'>
                <h1 className='text-4xl font-bold text-blue-800 py-8 border-b-2 border-blue-200'>
                    Our Purposes And Promises
                </h1>
                <p className='text-md leading-relaxed text-gray-700 mt-4'>
                    At BRAC Healthcare, we understand that healthcare is about more than just treating illness and injuries. It is about treating and caring for people. That is why we are dedicated to providing patient-centric service with kindness and compassion at the heart of all we do.
                    <br /><br />
                    Our team of experienced medical professionals promises to treat every patient with empathy, understanding, and respect while delivering the highest standard of medical care. We promise to create a welcoming and comforting environment for all who seek our care.
                </p>

                <div className='flex flex-col md:flex-row items-center mt-16 gap-10'>
                    <div className='md:w-2/3'>
                        <h2 className='text-3xl font-semibold text-blue-800 py-6'>
                            Logo Story
                        </h2>
                        <p className='text-md leading-relaxed text-gray-700'>
                            In the heart of BRAC Healthcare lies the essence of love and respect, just like the forget-me-not flower. Our logo, a five-petaled forget-me-not, represents our promise to always prioritize our patients, putting them at the centre of all that we do. With the forget-me-not as our inspiration, we strive to deliver the best possible healthcare service, one that never forgets the importance of true care and compassion. Our patients are not just mere numbers to us, but cherished individuals that we vow to keep close, like the petals of a forget-me-not.
                        </p>
                    </div>

                    <div className='md:w-1/3 flex justify-center'>
                        <img
                            className='w-2/3 h-auto rounded-xl shadow-lg md:ml-10'
                            src={logo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
