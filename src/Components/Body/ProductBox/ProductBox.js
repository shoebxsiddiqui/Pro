import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem.js";
import { getProducts } from "../../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const ProductBox = () => {
  const { keyword } = useParams();

  const dispatch = useDispatch();
  const alert = useAlert();

  const [page, setPage] = useState(1);

  const { error, products, filteredProductsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts({ keyword, page }));
  }, [dispatch, error, alert, keyword, page]);

  const handlePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-8/10 m-2 bg-gray-50 rounded">
      <div className="text-gray-500 m-3 mb-0 lg:m-5 lg:mb-0">Products</div>
      <div className="ml-3 m-2 mt-0 lg:ml-5 lg:mt-2 text-base font-semibold">
        Showing {(page - 1) * 24 + 1} – {page * resultPerPage} of{" "}
        {filteredProductsCount} results
      </div>
      <hr className="mb-2 mt-1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => {
          return <ProductItem key={product.id} item={product} />;
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          count={Math.ceil(filteredProductsCount / resultPerPage)}
          color="primary"
          onChange={handlePage}
        />
      </div>
    </div>
  );
};

export default ProductBox;
