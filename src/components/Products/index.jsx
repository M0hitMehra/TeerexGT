import React from "react";
import Card from "../Card";

const Products = ({ products, cart, addToCart }) => {
  return (
    <div className="product_block">
      <div className="product_items_card">
        {products.map((item) => {
          let isAddedToCart = cart.find((p) => p.id === item.id);
          return (
            <Card
              data={item}
              key={item.id}
              isAddedToCart={isAddedToCart}
              addToCart={() => addToCart(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
