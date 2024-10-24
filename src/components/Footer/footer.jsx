import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-cc text-white py-6">
            <div className="container mx-auto px-4 text-center sm:text-left flex flex-col sm:flex-row justify-between sm:items-end">
                <div className="mb-4 sm:mb-0">
                    <p>© Avahana 2024</p>
                    <p>Address: Lainchour 26, Kathmandu Nepal</p>
                    <p>Email: aavhananepal@gmail.com</p>
                    <p>Contact Number: +977 9851073764</p>
                </div>

                {/* Right Section: Contact Form */}

                <div
                    className="text-white py-2 px-4 rounded-md text-xs"
                >
                    Website Developed and Designed by Siddhartha
                </div>
                
            </div>
        </footer>
    );
}
