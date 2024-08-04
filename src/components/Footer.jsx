import React from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "ONLINE SHOPPING",
    links: ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards"],
    title2: "USEFUL LINKS",
    links2: ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat"],
  },
  {
    title: "CUSTOMER POLICIES",
    links: ["Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy Policy", "Grievance Officer"],
  },
  {
    title: "EXPERIENCE MOBILE APP",
    links: [],
    title2: "KEEP IN TOUCH",
    links2: [],
  },
  {
    title: "100% ORIGINAL GUARANTEE",
    links: ["For All Products"],
    title2: "Return Within 30DAYS",
    links2: ["Return Within 30DAYS"],
  },
  {
    title: "JOIN US",
    links: [" SUBSCRIBE TO OUR NEWSLETTERS"],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full text-slate-50 bg-violet-900">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid  w-full grid-cols-2  py-12 md:grid-cols-2 lg:grid-cols-5">
          {SITEMAP.map(({ title, links, title2, links2 }, key) => (
            <div key={key} className="w-10/12 text-left">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-normal text-sm uppercase"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="text-xs font-light">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
              {title2 && links2 && (
                <>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-4 mb-4 text-sm font-normal uppercase"
                  >
                    {title2}
                  </Typography>
                  <ul className="space-y-1">
                    {links2.map((link, key) => (
                      <Typography key={key} as="li" color="blue-gray" className="text-xs font-light">
                        <a
                          href="#"
                          className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </a>
                      </Typography>
                    ))}
                  </ul>
                </>
              )}
              {title === "EXPERIENCE MOBILE APP" && (
                <>
                  <div className="flex space-x-4 mt-4">
                    <a href="#">
                      <img src="./src/assets/images/google-play.png" alt="Google Play" className="h-10" />
                    </a>
                    <a href="#">
                      <img src="./src/assets/images/app-store.png" alt="App Store" className="h-10" />
                    </a>
                  </div>
                </>
              )}
              {title2 === "KEEP IN TOUCH" && (
                <div className="flex space-x-4 mt-4">
                  <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22.674 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.891-4.788 4.652-4.788 1.324 0 2.462.1 2.793.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.764v2.313h3.59l-.468 3.62h-3.122V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.674 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Typography>
                  <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M24 4.557a9.926 9.926 0 01-2.828.775 4.942 4.942 0 002.165-2.723 9.865 9.865 0 01-3.127 1.194A4.925 4.925 0 0016.675 3a4.924 4.924 0 00-4.92 4.92c0 .385.045.76.127 1.124A13.978 13.978 0 011.67 3.149a4.916 4.916 0 00-.665 2.474 4.916 4.916 0 002.188 4.103 4.91 4.91 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.93 4.93 0 01-2.223.084 4.929 4.929 0 004.604 3.419A9.87 9.87 0 010 21.54a13.938 13.938 0 007.548 2.212c9.056 0 14.012-7.498 14.012-13.986 0-.213-.006-.426-.014-.637A9.935 9.935 0 0024 4.557z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Typography>
                  <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.372 2 14.033 2 11.316v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.272 2.013 9.612 2 12.329 2h.08zm0 1.76h-.08c-2.616 0-2.965.011-4.013.058-.866.04-1.338.175-1.65.29-.416.161-.71.355-1.022.667-.312.312-.506.606-.667 1.022-.115.312-.25.784-.29 1.65-.047 1.048-.058 1.397-.058 4.013v.08c0 2.616.011 2.965.058 4.013.04.866.175 1.338.29 1.65.161.416.355.71.667 1.022.312.312.606.506 1.022.667.312.115.784.25 1.65.29 1.048.047 1.397.058 4.013.058h.08c2.616 0 2.965-.011 4.013-.058.866-.04 1.338-.175 1.65-.29.416-.161.71-.355 1.022-.667.312-.312.506-.606.667-1.022.115-.312.25-.784.29-1.65.047-1.048.058-1.397.058-4.013v-.08c0-2.616-.011-2.965-.058-4.013-.04-.866-.175-1.338-.29-1.65a3.142 3.142 0 00-.667-1.022 3.142 3.142 0 00-1.022-.667c-.312-.115-.784-.25-1.65-.29-1.048-.047-1.397-.058-4.013-.058h-.08zm0 4.187a4.315 4.315 0 110 8.63 4.315 4.315 0 010-8.63zm6.841-.218a1.005 1.005 0 110 2.01 1.005 1.005 0 010-2.01zm-6.84 1.553a2.762 2.762 0 100 5.524 2.762 2.762 0 000-5.524z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Typography>
                </div>
              )}
              {title === "JOIN US" && (
                <>
                  <div className="inline-grid grid-cols-1 mt-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className=" border-white text-white placeholder-blue-gray-400"
                />
                <Button className="ml-2 bg-orange-500 h-8 text-white font-light">
                  Subscribe
                </Button>
              </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-6 md:grid-cols-1 lg:grid-cols-1">
          <div className="w-full text-left">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold uppercase"
            >
              POPULAR SEARCHES
            </Typography>
            <ul className="space-y-1">
              {["Мakeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Mens | Handbags | Ladies Watches | Bags |Sports Shoes | Reebok Shoes | Puma Shoes | Boxers", 
                "Wallets Tops | Earrings | FastTrack Watches | Kurtis | Nike Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricker Shoes | Forever 21 Eye Makeup | Photo Frames", 
                "Punjabi Suits | Show Lipstick | Saree Watches | Dresses | Lahenga | Nike Shoes Goggles | Bras Suit Chinos | Adidas Shoes | Woodland Shoes | Jewelery Designers Sarees"
              ].map((link, key) => (
                <Typography key={key} as="li" color="blue-gray" className="font-normal text-sm break-words">
                  <a
                    href="#"
                    className="inline-block py-1 pr-2 transition-transform"
                  >
                    {link}
                  </a>
                </Typography>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-blue-gray-50 py-8 text-center md:text-left">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Typography
              color="blue-gray"
              className="text-center font-normal opacity-80"
            >
              <span className='flex'>In Case Of Any Concern <p className='font-normal text-white'>, Contact US</p></span>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
