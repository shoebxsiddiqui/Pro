import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div className="flex justify-around bg-blue-600 h-14">
      <div className="flex-col ml-24">
        <div className="text-xl italic text-green-50 font-sans font-semibold">
          Flipkart
        </div>
        <div className="flex gap-1 h-2 text-xs">
          <p className=" flex-shrink-0 italic text-gray-200 font-serif font-semibold">
            Explore
          </p>
          <p className="italic text-yellow-300 font-serif font-semibold">
            Plus
          </p>
          <img src={subURL} alt="Not found" className="h-2 mt-1"></img>
        </div>
      </div>
      <div className="w-96 flex">
        <input
          className="w-full h-8 outline-none mt-3 rounded px-4"
          placeholder="Search for products, brands and more"
        ></input>
        <span className="relative right-8 top-4 text-blue-500">
          <FaSearch className="size-6" />
        </span>
      </div>
      <div>
        <button className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold">
          Login
        </button>
      </div>
      <div className="text-gray-50 font-bold font-sans mt-3.5">
        Become a Seller
      </div>
      <div className="text-gray-50 font-bold font-sans mt-3.5">Cart</div>
    </div>
  );
};

export default Header;
