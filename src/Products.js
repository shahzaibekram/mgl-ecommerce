// import React, { useContext } from 'react'
// import {ProductsContext} from './ProductsContext'

// const Products = ()=>{
//     const {products} = useContext (ProductsContext)
//     return(
//         <div className='products'>
//             {products.map((products)=>(
//                 <div className='product' key={products.id}>
//                     <div className='product-image'> 
//                         <img src={products.image} />
//                     </div>

//                     <div className='product-details'>
//                         <div className='product-name'>
//                             {products.name}
//                         </div>
//                     </div>

//                     <div className='product-price'>
//                         <div className='product-name'>
//                             {products.price}
//                         </div>
//                     </div>

//                     <div className='add-cart'>
//                         Add to Cart
//                     </div>   
//                 </div>
//             )) }
//         </div>
//     )   
// }
// export default Products;