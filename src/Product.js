import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';


function Product({id, title, price, img}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = ()=>{
        //Add to item in Basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: img,
                price: price
            }
        })
    }
    return (
        <div className='product'>
           <div className='product_info'>
           <p>{title}</p>
           <p className='product_price'>
               <small>Rs. </small>
               <strong>{price} </strong></p> 
           </div>

            
            <img src={img} />
            <button onClick={addToBasket}>Add to Basket</button>
            

        </div>
        
    )
}

export default Product;
