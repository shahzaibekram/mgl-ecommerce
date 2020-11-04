import React from 'react'
import Product from './Product';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img className='home_image' 
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg' />
        
       <div className='home_row'>
        
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        <Product 
        id='1'
        title='Cold Cream'
        price={200}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        </div>

        <div className='home_row'>

        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        </div>

        <div className='home_row'>
            
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        <Product 
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={500}
        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        
        </div>
        
       </div>
    )
}

export default Home
