import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product, handleRemoveFromCart}) => {
    console.log(product)
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-product'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='review-title'>{name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='btn-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;