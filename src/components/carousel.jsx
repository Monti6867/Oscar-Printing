// import React, { useState } from 'react';
// import './style/car.css';

// const Carousel = () => {
//   const slides = [
//     {
//       images: [
//         './src/assets/images/Rectangle 24.png',
//         './src/assets/images/Rectangle 25.png',
//         './src/assets/images/Rectangle 26.png',
//       ],
//       text: 'Stand out with a\ncustom, budget-\nfriendly design.',
//       description: 'Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours.',
//       button: 'Work With Designer',
//       overlayContent: {
//         paragraph: '01 ------ Bed Room',
//         heading: 'Inner Peace',
//       },
//     },
//     {
//       images: [
//         'https://via.placeholder.com/400x400.png?text=Image+4',
//         'https://via.placeholder.com/200x200.png?text=Image+5',
//         'https://via.placeholder.com/200x200.png?text=Image+6',
//       ],
//       text: 'Slide 2 Description',
//       description: 'Second slide description goes here.',
//       button: 'Discover',
//     },
//     {
//       images: [
//         'https://via.placeholder.com/400x400.png?text=Image+7',
//         'https://via.placeholder.com/200x200.png?text=Image+8',
//         'https://via.placeholder.com/200x200.png?text=Image+9',
//       ],
//       text: 'Slide 3 Description',
//       description: 'Third slide description goes here.',
//       button: 'Get Started',
//     },
//     {
//       images: [
//         'https://via.placeholder.com/400x400.png?text=Image+7',
//         'https://via.placeholder.com/200x200.png?text=Image+8',
//         'https://via.placeholder.com/200x200.png?text=Image+9',
//       ],
//       text: 'Slide 3 Description',
//       description: 'Third slide description goes here.',
//       button: 'Get Started',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative main-box w-11/12 max-w-screen-2xl mx-auto mt-10 bg-[#648FA4] p-8">
//       <div className="hero-main overflow-hidden  flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-3">
//         <div className="left-content w-full md:w-1/4 p-2 text-left mx-2 rounded-md">
//           <h1 className="heading1 text-2xl md:text-3xl font-bold text-slate-800 whitespace-pre-wrap mb-4">{slides[currentIndex].text}</h1>
//           <p className="text-base leading-7 text-gray-600 mb-4">
//             {slides[currentIndex].description}
//           </p>
//           <button className="px-4 py-2 bg-orange-500 text-white rounded">
//             {slides[currentIndex].button}
//           </button>
//         </div>
//         <div className="w-full h- space-x-3 md:w-3/4 h-96 flex space-x-6 relative">
//           {slides[currentIndex].images.map((image, index) => (
//             <div key={index} className={index === 0 ? "w-3/5 h-full relative" : "w-1/2 h-5/6 relative"}>
//               <img
//                 src={image}
//                 alt={`Slide ${currentIndex + 1} - Image ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               {index === 0 && slides[currentIndex].overlayContent && (
//                 <>
//                 <div className="absolute bottom-3.5 left-3.5 p-4 bg-white bg-opacity-75">
//                   <p className="text-xs font-semibold">{slides[currentIndex].overlayContent.paragraph}</p>
//                   <h2 className="text-lg font-bold">{slides[currentIndex].overlayContent.heading}</h2>
//                 </div>
//                 <span className='absolute bottom-3.5 left-36 h-8 w-8 items-center bg-yellow-600 text-white'>
//                 <button>-&gt;</button>
//                 </span>
//                 </>
//               )}
//               {index === 1 && (
//                 <button
//                   className="absolute top-[60%] arrow transform -translate-y-1/2 bg-white text-gray-600 text-lg rounded-full px-3 py-1"
//                   onClick={() => goToSlide((currentIndex + 1) % slides.length)}
//                 >
//                   &gt;
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <span className="absolute bottom-10 w-16 buttondot flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'}`}
//           />
//         ))}
//       </span>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from 'react';
import './style/car.css';

const Carousel = () => {
  const slides = [
    {
      images: [
        './src/assets/images/Rectangle 24.png',
        './src/assets/images/Rectangle 25.png',
        './src/assets/images/Rectangle 26.png',
      ],
      text: 'Stand out with a\ncustom, budget-\nfriendly design.',
      description: 'Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours.',
      button: 'Work With Designer',
      overlayContent: {
        paragraph: '01 ------ Bed Room',
        heading: 'Inner Peace',
      },
    },
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+4',
        'https://via.placeholder.com/200x200.png?text=Image+5',
        'https://via.placeholder.com/200x200.png?text=Image+6',
      ],
      text: 'Slide 2 Description',
      description: 'Second slide description goes here.',
      button: 'Discover',
    },
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+7',
        'https://via.placeholder.com/200x200.png?text=Image+8',
        'https://via.placeholder.com/200x200.png?text=Image+9',
      ],
      text: 'Slide 3 Description',
      description: 'Third slide description goes here.',
      button: 'Get Started',
    },
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+7',
        'https://via.placeholder.com/200x200.png?text=Image+8',
        'https://via.placeholder.com/200x200.png?text=Image+9',
      ],
      text: 'Slide 3 Description',
      description: 'Third slide description goes here.',
      button: 'Get Started',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative main-box w-11/12 max-w-screen-2xl mx-auto mt-10 bg-[#648FA4] p-8">
      <div className="hero-main overflow-hidden  flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-3">
        <div className="left-content w-full md:w-1/4 p-2 text-left mx-2 rounded-md">
          <h1 className="heading1 text-2xl md:text-3xl font-bold text-slate-800 whitespace-pre-wrap mb-4">{slides[currentIndex].text}</h1>
          <p className="text-base leading-7 text-gray-600 mb-4">
            {slides[currentIndex].description}
          </p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">
            {slides[currentIndex].button}
          </button>
        </div>
        <div className="right-image">
          {slides[currentIndex].images.map((image, index) => (
            <div key={index} className={index === 0 ? "first-image" : "second-image"}>
              <img
                src={image}
                alt={`Slide ${currentIndex + 1} - Image ${index + 1}`}
                className="f-img"
              />
              {index === 0 && slides[currentIndex].overlayContent && (
                <>
                <div className="inner-piece">
                  <p className="text1 ">{slides[currentIndex].overlayContent.paragraph}</p>
                  <h4 className="text2">{slides[currentIndex].overlayContent.heading}</h4>
                </div>
                <span className='aerrow2  bg-yellow-600 '>
                <button>-&gt;</button>
                </span>
                </>
              )}
              {index === 1 && (
                <button
                  className="absolute top-[60%] arrow transform -translate-y-1/2 bg-white text-gray-600 text-lg rounded-full px-3 py-1"
                  onClick={() => goToSlide((currentIndex + 1) % slides.length)}
                >
                  &gt;
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-10 w-16 buttondot flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'}`}
          />
        ))}
      </span>
    </div>
  );
};

export default Carousel;
