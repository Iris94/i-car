'use client'

import { useState } from 'react'
import { FaWrench } from "react-icons/fa"
import { Sign } from ".";

export default function Navbar ({ setBlurEffect }: any) {
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);

    const openSignModal = () => {
        setIsSignModalOpen(true);
        setBlurEffect(true);
      };

    const closeSignModal = () => {
        setIsSignModalOpen(false);
        setBlurEffect(false)
      };

    return (
        <div className="w-full h-20 z-10 fixed flex justify-between">
            <div 
            className={`${isSignModalOpen ? 'hidden' : ''} 
            w-2/5 lg:w-1/5 flex items-center justify-center gap-5`}>
                <FaWrench className="text-lightColor w-fit h-2/3" />
                <div className="flex-col">
                    <p className="text-lightColor font-bold text-md lg:text-xl">i-Car</p>
                    <p className="text-lightColor text-sm lg:text-md">Online Service Book</p>
                </div>
            </div>
            <div 
            className={`${isSignModalOpen ? 'hidden' : ''} 
            w-2/5 lg:w-1/5 flex items-center justify-center`}>
                <button
                    className="text-lightColor bg-backgroundColor text-lg rounded-lg w-1/2"
                    onClick={openSignModal}
                    >
                    Sign In
                </button>
            </div>

            {isSignModalOpen && <Sign closeSignModal={closeSignModal} />}
        </div>
    )
}