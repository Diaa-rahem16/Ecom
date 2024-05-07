import React from "react";

const ProductCard = (props) => {
  const {photos,name,sellerName,discrtiption,price} = props.data
  return (
    <div id="product-card">
      <img src={photos} alt={name} />
      <div className="content">
        <div className="left">
          <h3>{sellerName}</h3>
          <h4>{name}</h4>
          <p>{discrtiption}</p>
        </div>
        <div className="right">
        <p>{price}DA</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
