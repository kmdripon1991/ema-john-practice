import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    

    const cartProducts = useLoaderData()
    console.log(cartProducts)
    

    return (
        <div>
            this is order page
        </div>
    );
};

export default Orders;