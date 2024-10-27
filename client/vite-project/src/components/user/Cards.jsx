import { Link } from 'react-router-dom';

export const FoodCard = ({ food }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <figure>
                <img src={food?.image} alt="food" className="w-full h-48 object-cover" />
            </figure>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{food?.name}</h2>
                <p className="text-sm text-gray-600">{food?.price}</p>
                <div className="mt-4">
                    <Link to={`/food-details/${food?._id}`}>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const CartFoodCard = ({ item, handleRemove }) => {
    return (
        <div className="flex items-center bg-gray-100 p-4 rounded-md shadow-md mb-4 transition-transform transform hover:scale-105">
            <img src={item?.foodId?.image} alt="cart-item" className="w-24 h-20 rounded-md object-cover" />
            <div className="ml-4 flex-1">
                <h2 className="text-lg font-medium text-gray-800">{item?.foodId?.name}</h2>
                <h3 className="text-md font-semibold text-gray-700">{item?.foodId?.price}</h3>
            </div>
            <button 
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition" 
                onClick={() => handleRemove(item?._id)}
            >
                Remove
            </button>
        </div>
    );
};
