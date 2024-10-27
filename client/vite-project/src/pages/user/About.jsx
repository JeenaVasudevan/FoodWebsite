import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-10 lg:p-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="flex flex-col w-full lg:w-1/2 text-gray-800 space-y-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          A Seamless Dining Experience at Your Fingertips
        </h1>
        <p className="text-lg leading-relaxed">
          When customers order food from our website, they experience convenience, variety, and quality all in one place. We offer a vast selection of top-rated local restaurants, allowing customers to explore new cuisines or enjoy their favorite meals. With fast delivery, orders arrive fresh and hot, often in under an hour. Real-time order tracking ensures customers know exactly when their food will arrive, while exclusive discounts and promotions make every meal more affordable. Our customizable meal options cater to dietary needs and preferences, ensuring everyone finds something to enjoy. We provide secure payment options, including contactless methods for added safety, and there's no minimum order requirement, allowing customers to order as much or as little as they like. For added flexibility, customers can also pre-order and schedule deliveries for later. Plus, with 24/7 customer support, help is always available, making the entire ordering experience seamless and stress-free.
        </p>
      </div>
    </div>
  );
};

export default About;
