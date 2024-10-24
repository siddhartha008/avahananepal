import React from 'react';
import HeroImage from '../../assets/avahanaHero.png';
import {motion} from 'framer-motion';
import {SlideLeft} from '../../utility/animation.js';


export default function Hero() {
    return (
        <section className="bg-cc pt-0 -mt-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[450px] rounded-3xl mt-5">
                {/* Text Container */}
                <div className='flex flex-col justify-center px-4 xl:pr-40'>
                    <div className="mt-10 mb-5 text-center md:text-left">
                        <h1 className='font-poppins text-4xl md:text-5xl font-bold text-py'>
                            Avahana Nepal
                        </h1>
                        <motion.p initial="initial" animate="animate" variants={SlideLeft(0.6)} className='text-lg mt-4 text-yellow-custom-100'>
                            A thriving and inclusive Nepal where every individual has access to healthcare,
                            education, and opportunities for sustainable development,
                            fostering a self-reliant and resilient society.
                        </motion.p>
                    </div>
                </div>

                {/* Image Container */}
                <div className='flex items-end justify-center'>
                    <img 
                        src={HeroImage} 
                        className='w-full h-auto rounded-t-full md:my-0 md:max-w-md lg:max-w-lg' 
                        alt="Hero" 
                    />
                </div>
            </div>
        </section>
    );
}
