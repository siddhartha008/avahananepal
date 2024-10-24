import React from 'react';
import Service from './service';
import {motion} from 'framer-motion';

export default function OurServices() {
    return (
        <section id='whatwedo' >
            <div className="md:mt-10 flex justify-center mt-32">
                <h3 className="text-3xl font-bold md:text-5xl">What We Do</h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 '>
                <Service serviceType={"Healthcare Initiatives"} />
                <Service serviceType={"Educational Support"} />
                <Service serviceType={"Agriculture and Livestock Development"} />
                <Service serviceType={"Water and Environmental Solutions"} />
                <Service serviceType={"Disaster Relief and Recovery"} />
                <Service serviceType={"Social Welfare Programs"} />
                <Service serviceType={"Sustainable Energy and Development"} />
                <Service serviceType={"Sports and Cultural Tourism"} />
            </div>
        </section>
    );
}
