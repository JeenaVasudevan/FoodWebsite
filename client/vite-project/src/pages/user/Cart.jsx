import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import {CartFoodCard } from "../../components/user/Cards";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

export const Cart = () => {
    const [cartData, isLoading, error] = useFetch("/cart/get-cart");

    const handleRemoveItem = async (foodId) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: "/cart/remove-food",
                data: { foodId: foodId },
            });
            toast.success("item removed from cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "error while removing product");
        }
    };

    return (
        <div>
            {cartData?.foods?.map((value) => (
                <CartFoodCard item={value} key={value._id} handleRemove={handleRemoveItem} />
            ))}
        </div>
    );
};
