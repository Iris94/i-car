import Image from "next/image"
import maincar from "@/public/maincar.png"

export default function Hero () {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row-reverse">
            <div className="w-full lg:w-3/5 h-1/2 lg:h-full relative flex items-center justify-evenly">
                <div className="heroBackground bg-lightColor w-full h-full z-0"></div>
                <div className="w-2/3 h-1/2 z-2 relative">
                    <Image src={maincar} alt="main-car-image" className="w-full h-auto" />
                </div>
            </div>
            <div className="w-full lg:w-2/5 h-1/2 lg:h-full flex justify-center items-center p-5">
                <div className="w-full h-1/2 flex justify-center items-center">
                    <h1 className="font-bold text-lightColor lg:text-5xl text-3xl"> - Register, Select Your Car, and Effortlessly Track Maintenance and Fuel</h1>
                </div>
            </div>
        </div>
    )
}