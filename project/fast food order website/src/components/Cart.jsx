import React from "react";
import "./Cart.css";

const Cart = ({ items, removeFromCart }) => {
  const total = items.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("₹", "")) * item.quantity,
    0
  );

  return (
    <div className="cart-box">
      <h3>🛒 Cart</h3>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} x {item.quantity} = ₹{(
                parseFloat(item.price.replace("₹", "")) * item.quantity
              ).toFixed(2)}
              <button onClick={() => removeFromCart(item.name)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ₹{total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
