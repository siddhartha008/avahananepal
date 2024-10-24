import React from 'react'
import TeamMember from './teamMember'
import {motion} from 'framer-motion';
import {SlideUp} from '../../utility/animation.js';
 
export default function Team() {
    return (
        <section id="ourteam"  className="bg-yellow-custom-100">
            <motion.div initial="initial" whileInView="animate" variants={SlideUp(0.2)} className='grid place-content-center'>
                <div className="grid place-items-center mt-4">
                    <h3 className='text-3xl font-bold md:text-4xl'>Our Team</h3>
                    <div className='border-2 border-black w-24 mt-2 mb-2'></div>
                </div>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" variants={SlideUp(0.6)} className="p-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                <TeamMember 
                    name="Nirmala Dhakal" 
                    imgSrc="src/assets/teamPictures/Nirmala.png" 
                    position = 'Chairperson' 
                />
                <TeamMember name="Devesh Bhattarai" position = "Director" imgSrc="src/assets/teamPictures/Devesh.png" />
                <TeamMember name="Bharat Rimal" position = "Director" imgSrc="src/assets/teamPictures/Bharat.png" />
                <TeamMember name="Deepika Aryal" position = "Director" imgSrc="src/assets/teamPictures/Deepika.png" />
                <TeamMember name="Sujana Koirala" position = "Director" imgSrc="src/assets/teamPictures/Binu.png" />
            </motion.div>

        </section>
    )
}