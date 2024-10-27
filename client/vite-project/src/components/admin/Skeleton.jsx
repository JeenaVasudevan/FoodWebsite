import React from 'react';

export const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-20 p-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-gray-200 animate-pulse rounded-lg shadow-md h-64">
                    <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-8 bg-blue-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
