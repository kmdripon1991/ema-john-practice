import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {


    // const [cartProducts, setCartProducts] = useState(products)
    // console.log(cartProducts)
    console.log(cart)



    let total = 0
    let totalShipping = 0
    let quantity = 0
    
    for (const product of cart){
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;

        // console.log(product.quantity)
    }

    const tax = total * 7/100
    const grandTotal = total + totalShipping + tax

    return (
        <>
            <h3>Order Summary</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: $ {totalShipping}</p>
            <p>Tax : $ {tax.toFixed(2)}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
        </>
    );
};

export default Cart;