import React from "react";
import { Skeleton } from "../../components/admin/Skeleton";
import { FoodCard } from "../../components/user/Cards";
import { useFetch } from "../../hooks/useFetch";

export const FoodList = () => {
    const [foodItems, loading] = useFetch("/api/foods/");
    
    if (loading) {
        return <Skeleton />;
    }
    
    if (!foodItems || foodItems.length === 0) {
        return <div className="text-center text-xl">No food items available.</div>;
    }

    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
            {foodItems.map((item) => (
                <FoodCard food={item} key={item._id} />
            ))}
        </div>
    );
};

