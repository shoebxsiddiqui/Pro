import React, { useState } from "react";

const FilterBox = () => {
  const [value, setValue] = useState(50); // Initial value set to 50

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="w-2/10 h-fit bg-gray-50 rounded m-2">
      <div className="m-3 text-lg font-bold">Filters</div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Range</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <input
            type="range"
            min="0"
            max="100000"
            value={value}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 text-xs mt-2 items-center">
          <div className="border border-gray-300 w-20 p-1">₹ 0</div> to{" "}
          <div className="border border-gray-300 w-20 p-1">₹ {value}</div>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input id="Boat" type="checkbox"></input>{" "}
              <label htmlFor="Boat">Boat</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Noise" type="checkbox"></input>{" "}
              <label htmlFor="Noise">Noise</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Apple" type="checkbox"></input>{" "}
              <label htmlFor="Apple">Apple</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="SUMSUNG" type="checkbox"></input>{" "}
              <label htmlFor="SUMSUNG">SUMSUNG</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Titan" type="checkbox"></input>{" "}
              <label htmlFor="Titan">Titan</label>
            </li>
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input id="Boat" type="checkbox"></input>{" "}
              <label htmlFor="Boat">Boat</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Noise" type="checkbox"></input>{" "}
              <label htmlFor="Noise">Noise</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Apple" type="checkbox"></input>{" "}
              <label htmlFor="Apple">Apple</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="SUMSUNG" type="checkbox"></input>{" "}
              <label htmlFor="SUMSUNG">SUMSUNG</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Titan" type="checkbox"></input>{" "}
              <label htmlFor="Titan">Titan</label>
            </li>
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input id="Boat" type="checkbox"></input>{" "}
              <label htmlFor="Boat">Boat</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Noise" type="checkbox"></input>{" "}
              <label htmlFor="Noise">Noise</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Apple" type="checkbox"></input>{" "}
              <label htmlFor="Apple">Apple</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="SUMSUNG" type="checkbox"></input>{" "}
              <label htmlFor="SUMSUNG">SUMSUNG</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Titan" type="checkbox"></input>{" "}
              <label htmlFor="Titan">Titan</label>
            </li>
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input id="Boat" type="checkbox"></input>{" "}
              <label htmlFor="Boat">Boat</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Noise" type="checkbox"></input>{" "}
              <label htmlFor="Noise">Noise</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Apple" type="checkbox"></input>{" "}
              <label htmlFor="Apple">Apple</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="SUMSUNG" type="checkbox"></input>{" "}
              <label htmlFor="SUMSUNG">SUMSUNG</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Titan" type="checkbox"></input>{" "}
              <label htmlFor="Titan">Titan</label>
            </li>
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="m-3">
        <div className="uppercase text-sm font-semibold">Brand</div>
        <div className="mt-2 text-sm text-gray-500 ">
          <ol className="flex flex-col gap-1">
            <li className="flex gap-2 items-center">
              <input id="Boat" type="checkbox"></input>{" "}
              <label htmlFor="Boat">Boat</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Noise" type="checkbox"></input>{" "}
              <label htmlFor="Noise">Noise</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Apple" type="checkbox"></input>{" "}
              <label htmlFor="Apple">Apple</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="SUMSUNG" type="checkbox"></input>{" "}
              <label htmlFor="SUMSUNG">SUMSUNG</label>
            </li>
            <li className="flex gap-2 items-center">
              <input id="Titan" type="checkbox"></input>{" "}
              <label htmlFor="Titan">Titan</label>
            </li>
            <li className="text-sm font-medium text-[#2874f0]">56 MORE</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
