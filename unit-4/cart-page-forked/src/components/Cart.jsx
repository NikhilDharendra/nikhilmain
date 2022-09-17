import { useState } from "react";
import "./Cart.css";
import Item from "./Item";
import { Products } from "./Product";
const Cart = () => {
  const [items, setItems] = useState(Products);
  return (
    <>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> Item in your
          cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            {items.map((currItem) => {
              <Item key={currItem.id} {...currItem} />;
            })}
            <Item />
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>2000rs</span>
          </h3>
        </div>
      </section>
    </>
  );
};
export default Cart;
