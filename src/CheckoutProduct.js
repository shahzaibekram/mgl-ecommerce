import React from 'react'
import { useStateValue } from './StateProvider';
import './CartProduct.css'

function CheckoutProduct ({id, title, image, price}){
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return(
        <div className='cartProduct'>
            <img className='cartProduct_image' src={image} />

            <div className='cartProduct_info'>
                <p className='cartProduct_title'>{title} </p>

                <p className='checkoutProduct_price'>
                    <small>pkr </small>
                    <strong>{price}</strong>
                </p>
            
            <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;