import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/productAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [str, setstr] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getProducts({ keyword: str }));
  };

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div className="flex justify-around bg-blue-600 h-14">
      <div
        className="flex-col ml-24 cursor-pointer"
        onClick={() => navigate("/")}
      >
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
          type="text"
          value={str}
          className="w-full h-8 outline-none mt-3 rounded px-4"
          placeholder="Search for products, brands and more"
          onChange={(e) => setstr(e.target.value)}
        ></input>
        <button
          type="submit"
          className="relative right-8 text-blue-500"
          onClick={submitHandler}
        >
          <FaSearch className="size-6" />
        </button>
      </div>
      <div>
        <button className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold">
          Login
        </button>
      </div>
      <div className="text-gray-50 font-bold font-sans mt-3.5">
        Become a Seller
      </div>
      <Link to="/cart" className="text-gray-50 font-bold font-sans mt-3.5">
        Cart
      </Link>
    </div>
  );
};

export default Header;
