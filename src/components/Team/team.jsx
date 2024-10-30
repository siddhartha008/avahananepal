import React from 'react';
import TeamMember from './teamMember';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation.js';

export default function Team() {
    return (
        <section id="ourteam" className="bg-yellow-custom-100">
            <motion.div initial="initial" whileInView="animate" variants={SlideUp(0.2)} className="grid place-content-center">
                <div className="grid place-items-center mt-4">
                    <h3 className="text-3xl font-bold md:text-4xl">Our Team</h3>
                    <div className="border-2 border-black w-24 mt-2 mb-2"></div>
                </div>
            </motion.div>

            <motion.div
                initial="initial"
                whileInView="animate"
                variants={SlideUp(0.6)}
                className="p-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center"
            >
                <TeamMember 
                    name="Nirmala Dhakal" 
                    imgSrc="../../assets/Nirmala.png" 
                    position="Chairperson" 
                    bio="Nirmala is a dedicated educator with expertise in Montessori methods, committed to early childhood development and nurturing young minds. As a teacher and trainee at ECDC, she emphasizes holistic, child-centered learning."
                />
                <TeamMember 
                    name="Devesh Bhattarai" 
                    imgSrc="../../assets/Devesh.png" 
                    position="Director" 
                    bio="Devesh is a seasoned banker with over 25 years at Himalaya Bank, specializing in remittance. As Deputy CEO of Ramro Remit, he has led pioneering initiatives in financial services."
                />
                <TeamMember 
                    name="Bharat Rimal" 
                    imgSrc="../../assets/Bharat.png" 
                    position="Director" 
                    bio="Bharat, director at Ramlaxman Group, drives innovation across subsidiaries like Technology Sales and Ramlaxman Innovations, with a focus on disaster risk systems and public safety."
                />
                <TeamMember 
                    name="Deepika Aryal" 
                    imgSrc="../../assets/Deepika.png" 
                    position="Director" 
                    bio="Deepika is a school counselor at KMC College, with four years of expertise in child therapy, supporting students’ emotional and academic well-being."
                />
                <TeamMember 
                    name="Sujana Koirala" 
                    imgSrc="../../assets/Binu.png" 
                    position="Director" 
                    bio="Sujana is a lawyer and gender advocate with experience at the Forum for Women, Law, and Development, specializing in legal reforms and gender equity."
                />
            </motion.div>
        </section>
    );
}
