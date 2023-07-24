import React from "react";

const Card = ({ data, isAddedToCart, addToCart }) => {
  //   card from scratch
  return (
    <div className="card">
      <div className="card_content">
        <div className="card_content_title">{data.name}</div>
      </div>
      <div className="card_image">
        <img src={data.imageURL} width="100%" height="100%" alt="" />
      </div>
      <div className="card_footer">
        <div className="card_footer_price">
          <span className="card_footer_price_currency"> Rs </span>
          <span className="card_footer_price_value">{data.price}</span>
        </div>
        <div className="card_footer_add_to_cart">
          {
            <button
              className={`card_footer_add_to_cart_button ${isAddedToCart ? " AddedToCart" : ""}`}
              onClick={addToCart}
            >
              {isAddedToCart ? "Added" : "Add to cart"}
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
