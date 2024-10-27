import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center w-full px-6 md:px-20 h-24 bg-white shadow-lg border-b">
            <Link to="/" className="text-3xl font-bold text-gray-800 hover:text-blue-500 transition duration-200">
                Zestora
            </Link>
            <nav className="flex gap-10 items-center font-semibold text-gray-600">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/about" className="hover:text-blue-500">About</Link>
                <Link to="/foods" className="hover:text-blue-500">Food</Link>
            </nav>
            <div className="flex items-center gap-4">
                <DarkMode />
                <button onClick={() => navigate('/sign-up')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500">
                    Create an Account
                </button>
            </div>
        </div>
    );
};
