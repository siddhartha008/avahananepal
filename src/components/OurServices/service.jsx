import React from 'react';
import EducationLogo from '../../assets/education.png';
import AgriLogo from '../../assets/agri.png';
import HealthLogo from '../../assets/health.png';
import WaterLogo from '../../assets/water.png'; // Add logos for new categories as needed
import DisasterLogo from '../../assets/disaster.png';
import SocialWelfareLogo from '../../assets/socialwelfare.png';
import EnergyLogo from '../../assets/energy.png';
import SportsLogo from '../../assets/sports.png';
import {motion} from 'framer-motion';

export default function Service({ serviceType }) {
    const types = {
        "Healthcare Initiatives": "Providing essential healthcare services, maternal care, and mobile health camps in underserved areas.",
        "Educational Support": "Offering scholarships, educational materials, and support to underprivileged students and schools.",
        "Agriculture and Livestock Development": "Promoting modern farming techniques and sustainable agricultural practices for rural economic growth.",
        "Water and Environmental Solutions": "Ensuring clean water access and promoting environmental preservation through community-driven initiatives.",
        "Disaster Relief and Recovery": "Coordinating emergency relief efforts and supporting long-term recovery for disaster-affected communities.",
        "Social Welfare Programs": "Providing shelter, education, and social reintegration for marginalized groups, including orphans and street children.",
        "Sustainable Energy and Development": "Promoting alternative energy sources and sustainable solutions in underserved regions.",
        "Sports and Cultural Tourism": "Organizing sports events and promoting cultural tourism to support local economic development."
    };

    const logos = {
        "Healthcare Initiatives": HealthLogo,
        "Educational Support": EducationLogo,
        "Agriculture and Livestock Development": AgriLogo,
        "Water and Environmental Solutions": WaterLogo,
        "Disaster Relief and Recovery": DisasterLogo,
        "Social Welfare Programs": SocialWelfareLogo,
        "Sustainable Energy and Development": EnergyLogo,
        "Sports and Cultural Tourism": SportsLogo
    };

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className='container border-2 rounded-md border-gray-200 w-64 p-4 shadow-md'>
            <img src={logos[serviceType]} alt={serviceType} className='w-52' />
            <h3 className='text-xl font-semibold'>{serviceType}</h3>
            <p className='text-sm'>
                {types[serviceType]}
            </p>
        </motion.div>
    )
}
