const Location = () => {
    return (
        <div className="flex flex-col md:flex-row text-black items-center p-10 md:p-16 gap-10 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md mx-5 my-10">
            {/* Text Section */}
            <div className="md:w-1/2 w-full">
                <h1 className="text-4xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                    Our Location
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    Maa General Hospital & Diagnostic Centre is committed to serving our community with compassion and care. Conveniently located, our facility is easily accessible for everyone. Whether you're coming for a routine check-up, emergency, or specialist consultation, our location is designed to make your experience smooth and stress-free.
                    <br /><br />
                    Visit us and discover how our professional and welcoming environment can support your health journey every step of the way.
                </p>
            </div>

            {/* Google Map */}
            <div className="md:w-1/2 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148292.011105037!2d89.60466033839985!3d22.692208793906758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd900216e546b%3A0x3179e0956f1adad1!2sMaa%20General%20Hospital%20%26%20Diagnostic%20Centre!5e0!3m2!1sen!2sbd!4v1733514506373!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-lg"
                    title="Maa General Hospital Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
