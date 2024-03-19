import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./orders.css";
import Cart from "../Cart/Cart";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart)
  // console.log(cartProducts)
  const handleRemoveFromCart=(id)=>{
    const remainingCart = cart.filter(pd=>pd.id!==id)
    setCart(remainingCart)
    removeFromDb(id)
  
  }
  

  return (
    <div className="review-container">
      <div>
        {cart.map(product => (
          <ReviewItems 
          key={product.id} 
          product={product}
          handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Orders;
