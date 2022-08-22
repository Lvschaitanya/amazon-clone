import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
                className='home_img'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt='' 
            />

            <div className='home_row'>
                <Product 
                    title={"Test 0"}
                    id={0}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={500.00}
                    rating={4}
                />
                <Product 
                    title={"Test 1"}
                    id={1}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={215.00}
                    rating={2}
                />
            </div>
                
            <div className='home_row'>
                <Product 
                    title={"Test 2"}
                    id={2}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={1205.00}
                    rating={5}
                />
                <Product 
                    title={"Test 3"}
                    id={3}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={25.00}
                    rating={4}
                />
                <Product 
                    title={"Test 4"}
                    id={4}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={350.00}
                    rating={5}
                />
            </div>

            <div className='home_row'>
                <Product 
                    title={"Test 5"}
                    id={5}
                    img={'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'}
                    price={12750.00}
                    rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home