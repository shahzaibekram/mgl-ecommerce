import React from 'react'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Cart.css'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <img className='checkout_ad'
            src='data:image/jpeg;base64,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' />
        
        
        {basket?.length ===0 ?(
            <div>
                <h1>Your Shopping Basket is Empty</h1>
            </div>
        ):(
            <div>
                <h1>full</h1>

            {basket.map(item =>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                />
            )) }

            </div>
        )}
        </div>
    )
}

export default Checkout;