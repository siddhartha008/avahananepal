
import React from 'react';

export default function About() {
    return (
        <section id="about" className='mt-10 px-4 lg:px-20'>
            {/* Flex container for responsiveness */}
            <div className='flex flex-col lg:flex-row place-items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 justify-between '>
                <div className='relative w-1/2 lg:w-1/3'>
                <img
                        src='src/assets/aboutPicture.png'
                        className='w-full h-auto relative blur-3xl rounded-3xl'
                        alt="First Image"
                    />
                    <img
                        src='src/assets/aboutPicture.png'
                        className='w-full h-auto absolute top-0 left-2 rounded-3xl' // Adjust `top` and `left` values as needed
                        alt="Second Image"
                    />
                </div>
                
                {/* Text container */}
                <div className='lg:w-1/2 flex flex-col self-center'>
                    <h2 className='text-2xl text-center font-bold mb-4'>
                        About Us
                    </h2>
                    <p className='text-lg text-center leading-relaxed '>
                        Avahana Nepal is a community-driven organization dedicated to creating a sustainable impact
                        in Nepal through comprehensive programs in health, education, social welfare, sports, and sustainable
                        development. We are committed to empowering vulnerable communities, promoting modern agricultural practices,
                        enhancing access to clean water, and supporting disaster relief efforts. Avahana is built on the principles of service,
                        innovation, and collaboration, striving to uplift those in need while ensuring long-term development for future generations.
                    </p>
                </div>
            </div>
        </section>
    );
}
