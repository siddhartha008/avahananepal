import React from 'react';

export default function TeamMember({ name, imgSrc, position, bio }) {
    return (
        <div className="relative group p-6 text-center transition-transform hover:scale-105 w-full sm:w-auto">
            {/* Profile Image */}
            <div className="bg-yellow-50 rounded-full p-4 flex justify-center items-center relative mx-auto w-44 h-44 sm:w-34 sm:h-34">
                <img
                    className="rounded-full object-cover shadow-sm w-full h-full"
                    src={imgSrc}
                    alt={`${name}'s avatar`}
                />
            </div>

            {/* Name and Position */}
            <h4 className="mt-4 text-lg font-semibold">{name}</h4>
            <span className="text-sm">{position}</span>

            {/* Bio for mobile (always visible) */}
            <div className="lg:hidden mt-4 bg-cc bg-opacity-90 p-4 rounded-lg shadow-inner">
                <p className="text-sm text-white">{bio}</p>
            </div>

            {/* Hover bio for desktop (hidden by default) */}
            <div className="hidden lg:flex lg:absolute inset-0 flex-col justify-center items-center bg-cc bg-opacity-90 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 rounded-full p-6">
                <p className="text-sm">{bio}</p>
            </div>
        </div>
    );
}
