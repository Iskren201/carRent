import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';
// import { FaCarSide, FaCarAlt, FaCar, FaCarCrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <div
                id="button"
                className="hidden container mx-auto flex justify-center items-center px-4 md:px-10 py-20"
            >
                <button
                    onClick="openModal()"
                    className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
                >
                    Open Modal
                </button>
            </div>
            <div
                id="modal"
                className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20"
            >
                <div className="bg-white dark:bg-gray-800 px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                    <div role="img" aria-label="Luxe. Logo.">
                        <GiAutoRepair className="text-gray-900 dark:text-white" size={60} />
                    </div>
                    <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">
                        Welcome to the world of car loans!
                    </h1>
                    <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">
                        A confirmation email has been sent to your account, goCar@gmail.com,
                        with the details of shipping and delivery.
                    </p>
                    <div className="mt-12 md:mt-14 w-full flex justify-center">

                        <Link to='/' className="dark:text-white dark:border-white w-full 
                            sm:w-auto border border-gray-800 text-base font-medium text-green-500 
                            py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                             hover:bg-green-600 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">
                            Back to Store
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
