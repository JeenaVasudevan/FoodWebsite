import React from 'react';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-white shadow-lg w-full p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Deliciousness Delivered Fast
        </h1>
      </header>
      
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h2 className="text-2xl font-semibold mt-6 text-center">
          Enjoy fast, fresh delivery of delicious meals
        </h2>
        <p className="mt-2 text-gray-700 text-center max-w-xl">
          From top restaurants—bringing flavor and convenience straight to you!
        </p>

        <div className="mt-8 flex flex-wrap justify-center">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
            Order Now
          </button>
          <button className="ml-4 bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-400 transition duration-200">
            Explore Restaurants
          </button>
        </div>
      </main>
    </div>
  );
};
