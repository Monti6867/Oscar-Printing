import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Instagram Section */}
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Follow Products And Discounts On Instagram</h2>
        
        <div className="my-10 grid grid-cols-6 gap-4">
          {/* Replace these with actual images */}
          <img src="./src/assets/images/card1.png" alt="Instagram photo 1" />
          <img src="./src/assets/images/card2.png" alt="Instagram photo 2" />
          <img src="./src/assets/images/card3.png" alt="Instagram photo 3" />
          <img src="./src/assets/images/card4.png" alt="Instagram photo 4" />
          <img src="./src/assets/images/card5.png" alt="Instagram photo 5" />
          <img src="./src/assets/images/card6.png" alt="Instagram photo 6" />
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Or Subscribe To The Newsletter</h1>
          <form className="mt-6 max-w-md mx-auto flex items-center ">
            <input 
              type="email" 
              placeholder="Email Address..." 
              className="appearance-none bg-transparent border-b-2 border-zinc-900 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            />
            <button 
              type="submit" 
              className="ml-4 bg-transparent border-b-2 border-gray-400  text-gray-700 py-1 px-2 focus:outline-none">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
