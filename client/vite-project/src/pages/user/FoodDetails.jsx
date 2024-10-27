import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const FoodDetails = () => {
    const { id } = useParams();
    const [foodDetails, isLoading] = useFetch(`/food/${id}`); // Ensure the API endpoint is correct
    
    const handleAddToCart = async () => {
        try {
            await axiosInstance.post("/cart/add-to-cart", { foodId: id });
            toast.success('Food added to cart');
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Error adding food to cart');
        }
    };

    if (isLoading) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    return (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                <img src={foodDetails?.image} alt="food" className="object-cover w-full h-64 rounded-lg shadow-md" />
            </div>
            <div className="w-full lg:w-8/12 lg:pl-6">
                <h2 className="text-4xl font-bold text-gray-800">{foodDetails?.name}</h2>
                <p className="mt-2 text-gray-600 text-lg">{foodDetails?.description}</p>
                <p className="mt-4 text-2xl font-semibold text-green-600">${foodDetails?.price}</p> {/* Added $ sign */}
                <button 
                    className="mt-6 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300" 
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};
