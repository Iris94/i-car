

export default function CheckCar () {
    return (
        <div className="flex flex-col lg:flex-row w-screen h-screen">
        <div 
        className="bg-backgroundColor w-full h-1/2 lg:w-1/2 lg:h-full order-2 lg:order-1 flex justify-center items-center"
        >
            <div className="w-2/3 l-2/3 lg:l-2/5 flex flex-col">
                <h3 className="w-full h-1/2 font-bold text-lightColor lg:text-5xl md:text-4xl text-2xl">
                    Pick Your Car...
                </h3>
                <p className="w-full h-1/2 text-lightColor lg:text-2xl md:text-lg">
                    ...and begin your very own personal car journal.
                </p>
            </div>
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