import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/product_actions";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, image, price, description, category } = product;
  const productDetails = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => {
        console.log(e);
      });
    dispatch(selectedProduct(res.data));
  };
  useEffect(() => {
    productDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  //   console.log(Object.keys(product));
  return (
    <div className="container mt-5">
      {Object.keys(product).length === 0 ? (
        <>Loading...</>
      ) : (
        <div className="card mb-3">
          <div className="row g-0 p-5 align-items-center">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="www" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h3 className="card-title">${price}</h3>
                <p className="card-text">
                  <small className="text-muted">{category}</small>
                </p>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
