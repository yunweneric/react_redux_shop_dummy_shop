import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, price, title, category, image } = product;
    return (
      <div className="col-3 mt-5" key={id}>
        <div class="col-10 justify-content-evenly align-items-center card">
          <Link to={`/products/${id}`}>
            <img src={image} class="card-img-top w-50 h-50" alt="..." />
          </Link>
          <div class="card-body">
            <h6 class="card-title">{title}</h6>
            <h3 class="card-text">${price}</h3>
            <p class="card-text">{category}</p>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
