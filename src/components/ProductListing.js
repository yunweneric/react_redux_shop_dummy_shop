import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/product_actions";
const ProductListing = () => {
  useEffect(() => {
    fetchProduct();
  }, []);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const res = await axios("https://fakestoreapi.com/products").catch((e) => {
      console.log(e);
    });
    console.log(res.data);
    dispatch(setProducts(res.data));
  };
  return (
    <div
      className="d-flex container w-100 flex-wrap"
      style={{ marginTop: "50px" }}
    >
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
