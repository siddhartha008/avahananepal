import React from 'react';

// Pass isChairperson to highlight Nirmala
export default function TeamMember({ name, imgSrc, position, bio} ) {
    return (
        <div className={`rounded-full p-6 text-center transition-transform hover:scale-105`}>
        
            <div className="bg-yellow-50 rounded-full p-4 flex justify-center items-center relative">
                <img className="rounded-full object-cover shadow-sm" src={imgSrc} alt={`${name}'s avatar`} />
            </div>
            <h4 className="mt-4 text-lg font-semibold">{name}</h4>
            <span>
                {position}
            </span>
        </div>
    );
}
