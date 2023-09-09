'use client'

import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { Login, Register } from ".";

export default function Sign ( { closeSignModal }: any ) {
    const [defaultSignOption, setDefaultSignOption] = useState(false)

    const handleClose = () => {
        closeSignModal();
      };

    const switchToRegister = () => {
        setDefaultSignOption(true)
    }

    const switchToLogin = () => {
        setDefaultSignOption(false)
    }

    return (
        <div className="w-screen h-screen bg-transparenent fixed flex justify-center items-center">
            <div className="lg:w-1/3 lg:h-1/3 w-4/5 h-1/3 z-50 shadow-md shadow-beigeColor bg-backgroundColor flex flex-col justify-center items-center gap-1 p-2">
                <div className="h-6 w-full flex justify-end">
                <FaWindowClose 
                className="text-red-500 w-fit h-full hover:text-red-700 hover:cursor-pointer"
                onClick={handleClose} />
                </div>
            {!defaultSignOption
            ?
            <Login switchToRegister={switchToRegister} />
            :
            <Register switchToLogin={switchToLogin} />}
            </div>
        </div>
    )
}