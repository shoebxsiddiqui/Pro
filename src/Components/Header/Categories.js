import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/productAction";

const Categories = () => {
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([]);

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

  useEffect(() => {
    dispatch(getProducts({ brands }));
  }, [dispatch, brands]);

  return (
    <div className="h-10 bg-white flex justify-evenly items-center text-sm font-bold">
      {brandOptions.map((brand) => (
        <div className="cursor-pointer" onClick={() => setBrands([brand])}>
          {brand}{" "}
        </div>
      ))}
    </div>
  );
};

export default Categories;
