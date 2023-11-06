import { Link } from "react-router-dom";

const CarCard = ({ carName, imageSrc, details }) => {
    const { type, category, seats, fuelType, price } = details;

    return (
        <div>
            <img src={imageSrc} alt="" className="mx-auto" />
            <div className="px-5">
                <h3 className="text-dark-gray text-2xl font-bold mb-4 mt-6 text-center md:text-start">
                    {carName}
                </h3>

                <div className="flex gap-3 items-center flex-wrap justify-center md:justify-start">
                    <div className="flex gap-3 items-center">
                        <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
                        <p className="text-dark-gray">{type}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
                        <p className="text-dark-gray">{category}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
                        <p className="text-dark-gray">{seats}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
                        <p className="text-dark-gray">{fuelType}</p>
                    </div>
                </div>

                <div className="my-7 h-[1px] bg-accent-gray w-full" />

                <div className="flex justify-between items-center">
                    <h2 className="font-kalam font-bold text-4xl text-primary-black">
                        ${price} <span className="font-raleway text-dark-gray text-xl font-normal">/Day</span>
                    </h2>
                    <Link to="/Booking" className="mt-4">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Booking
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
