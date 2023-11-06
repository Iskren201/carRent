import carOne from "../assets/car-one.svg";
import carTwo from "../assets/car-two.svg";
import carThree from "../assets/car-three.svg";
import { CarCard } from "../components";
import { Link } from "react-router-dom";

const CarsForRental = () => {
  const carList = [
    {
      carName: "BMW X3",
      imageSrc: carOne,
      details: {
        type: "Sports",
        category: "Auto",
        seats: "4 Seats",
        fuelType: "Diesel",
        price: 369,
      },
    },
    {
      carName: "BMW M2",
      imageSrc: carTwo,
      details: {
        type: "Sports",
        category: "Auto",
        seats: "4 Seats",
        fuelType: "Diesel",
        price: 369,
      },
    },
    {
      carName: "Ford Explorer",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Auto",
        seats: "4 Seats",
        fuelType: "Diesel",
        price: 369,
      },
    }, {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
    {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
    {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
    {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
    {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
    {
      carName: "GTR Miisan",
      imageSrc: carThree,
      details: {
        type: "Sports",
        category: "Nissan",
        seats: "2 Seats",
        fuelType: "Benzin",
        price: 369,
      },
    },
  ];

  return (
    <div className="pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-extrabold text-gray-900 mb-9">
          Cars for <span className="text-green-500">rental</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {carList.map((car, index) => (
            <CarCard key={index} carName={car.carName} imageSrc={car.imageSrc} />
          ))}
        </div>
        <Link to="/" className="block text-center mt-8 text-indigo-600 hover:text-indigo-700">
          Home
        </Link>
      </div>
    </div>
  );
};

export default CarsForRental;
