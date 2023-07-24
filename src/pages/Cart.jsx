import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const calculate = (cart) => {
    let temp = cart.reduce(
      (prevVal, curr) => prevVal + curr.price * curr.qty,
      0
    );
    setTotalAmount(temp);
  };

  useEffect(() => {
    calculate(cart);
  }, [cart]);

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  };
  const handleQuantity = (id, value) => {
    let tempCart = cart.map((p) =>
      p.id === id ? { ...p, qty: parseInt(value) } : p
    );
    setCart(tempCart);
    // calculate(tempCart);
  };
  return (
    <div className="cart_container">
      <h3>Shopping Cart</h3>
      <div className="cart_block">
        {cart.map((product) => (
          <ProductBox
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            handleQuantity={handleQuantity}
          />
        ))}
      </div>
      {totalAmount !== 0 ? (
        <div className="total_amount" >
          <h2>Total Amount</h2>:
          <h2>{totalAmount} INR </h2>
        </div>
      ) : (
        <div className="empty_cart">
          {" "}
          Please add an item and item to view on cart
        </div>
      )}
    </div>
  );
};

export default Cart;

const ProductBox = ({ product, removeFromCart, handleQuantity }) => {
  let options = new Array(product.quantity);
  options.fill(0);
  const [qty, setQty] = useState(1);

  const handleDelete = () => {
    removeFromCart(product);
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleOptionChange = (e) => {
    setQty(e.target.value);
    handleQuantity(product.id, e.target.value);
  };

  return (
    <div className="cart_box">
      <div className="cart_img">
        <img src={product.imageURL} alt={product.name} width="100%" />
      </div>
      <div className="cart_box_2">
        <h4>{product.name}</h4>
        <h4>
          {product.price} {product.currency}{" "}
        </h4>
      </div>
      <div className="cart_box_3">
        <select value={qty} onChange={handleOptionChange}>
          {options.map((a, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
