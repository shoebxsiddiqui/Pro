import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../actions/productAction";
import { IoMdStar } from "react-icons/io";

const FilterBox = () => {
  const dispatch = useDispatch();

  const minOptions = [0, 100, 300, 500, 1000, 2000];
  const maxOptions = [10000, 15000, 25000];
  const brandOptions = [
    "ZenithWare",
    "NovaTrend",
    "AeroFusion",
    "PixelPeak",
    "EchoLux",
    "QuantumEdge",
    "VortexVibe",
    "StellarLine",
    "LuxeFusion",
    "NebulaNex",
  ];

  const [val, setVal] = useState([
    minOptions[0],
    maxOptions[maxOptions.length - 1],
  ]);
  const [min, setMin] = useState(minOptions[0]);
  const [max, setMax] = useState(maxOptions[maxOptions.length - 1]);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState();
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState(1);

  useEffect(() => {
    dispatch(
      getProducts({ price: [min, max], brands, ratings, discount, stock })
    );
  }, [dispatch, min, max, brands, ratings, discount, stock]);

  const valHandler = (event, newVal) => {
    setVal(newVal);
  };

  const changeHandler = () => {
    setMin(val[0]);
    setMax(val[1]);
  };

  const minHandler = (e) => {
    const newMin = Number(e.target.value);
    setVal([newMin, val[1]]);
    setMin(newMin);
  };

  const maxHandler = (e) => {
    const newMax = Number(e.target.value);
    setVal([val[0], newMax]);
    setMax(newMax);
  };

  const brandHandler = (e) => {
    const value = e.target.value;
    if (brands.includes(value)) {
      setBrands((prevBrands) => prevBrands.filter((brand) => brand !== value));
    } else {
      setBrands((prevBrands) => [...prevBrands, value]);
    }
  };

  const ratingHandler = (event) => {
    const rating = Number(event.target.value);
    setRatings(rating);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const discountHandler = (e) => {
    const dis = Number(e.target.value);
    setDiscount(dis - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const stockHandler = (e) => {
    setStock(stock === 1 ? 0 : 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-2/10 h-fit bg-gray-50 rounded m-2">
      <div className="m-3 text-lg font-bold">Filters</div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Range</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <Slider
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={Math.min(...minOptions)}
            max={Math.max(...maxOptions)}
            value={val}
            onChange={valHandler}
            onChangeCommitted={changeHandler}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 text-xs mt-2 items-center">
          <select
            value={min}
            className="border border-gray-300 w-20 p-1"
            onChange={minHandler}
          >
            {minOptions.map((option) => (
              <option key={option} value={option}>
                ₹ {option}
              </option>
            ))}
          </select>{" "}
          to{" "}
          <select
            value={max}
            className="border border-gray-300 w-20 p-1"
            onChange={maxHandler}
          >
            {maxOptions.map((option) => (
              <option key={option} value={option}>
                ₹ {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            {brandOptions.map((brand) => (
              <li key={brand} className="flex gap-2 items-center">
                <input
                  id={brand}
                  value={brand}
                  type="checkbox"
                  checked={brands.includes(brand)}
                  onChange={brandHandler}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            ))}
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Customer Rating</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            {[4, 3, 2, 1].map((rating) => (
              <li key={rating} className="flex gap-2 items-center">
                <input
                  id={`rating-${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={ratings === rating}
                  onChange={ratingHandler}
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center"
                >
                  <span>{rating}</span>
                  <IoMdStar className="ml-1 mt-0.5" />
                  <span className="ml-1">and above</span>
                </label>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Discount</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            {[5, 10, 25, 50].map((dis) => (
              <li key={dis} className="flex gap-2 items-center">
                <input
                  id={`discount-${dis}`}
                  type="radio"
                  name="discount"
                  value={dis}
                  checked={discount + 1 === dis}
                  onChange={discountHandler}
                />
                <label htmlFor={`discount-${dis}`}>{dis}% or more</label>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">AVAILABILITY</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input
                id="stock"
                type="checkbox"
                checked={stock === 1}
                onChange={stockHandler}
              />
              <label htmlFor="stock">Exclude Out of Stock</label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
