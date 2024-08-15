import React, { useEffect } from "react";
import ProductItem from "./ProductItem.js";
import { getProducts } from "../../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const ProductBox = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, products, productsCount } = useSelector(
    (state) => state.products
  );
  console.log(products);
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  const sortCss = {
    display: "inline-block",
    color: "#2874f0",
    fontWeight: "bold",

    borderBottom: "2px solid #2874f0", // Tomato color
    paddingBottom: "0px",
  };
  return (
    <div className="w-8/10 m-2 bg-gray-50 rounded">
      <div className="text-xs text-gray-500 m-3 mb-0 lg:m-5 lg:mb-0">
        Home &gt; Wearable... &gt; Smart &gt; DevicesSmart &gt; Watches
      </div>
      <div className="ml-3 m-2 mt-0 lg:ml-5 lg:mt-2 text-base font-semibold">
        Showing 1 – 40 of {productsCount} results for "smart watch"
      </div>
      <div>
        <ol className="flex flex-row flex-nowrap whitespace-nowrap gap-3 ml-3 lg:ml-5 text-gray-500">
          <li style={sortCss}>Sort By</li>
          <li>Relevance</li>
          <li>Popularity</li>
          <li>Price -- Low to High</li>
          <li>Price -- High to Low</li>
        </ol>
      </div>
      <hr className="mb-2 mt-1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => {
          return <ProductItem key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductBox;
