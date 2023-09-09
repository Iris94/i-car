'use client'


export default function Dashboard () {

    return (
        <div className="flex flex-col lg:flex-row w-screen h-screen">
            <div 
            className="bg-backgroundColor w-full h-1/2 lg:w-1/2 lg:h-full order-2 lg:order-1"
            >

            </div>
            <div
            className="bg-lightColor w-full h-1/2 lg:w-1/2 lg:h-full order-1 lg:order-2"
            >
                <div></div>
                <div></div>
            </div>
        </div>
    )
}