import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <h2 className='font-bold text-3xl mb-10 mx-80 bg-amber-300 rounded-md m-5 py-5 text-center'>Awesome Affortable Price List</h2>
            <div className='grid md:grid-cols-3 gap-4 m-5'>
            {
                prices.map(price => 
                    <Price
                        key = {price.id}
                        price = {price}
                    ></Price>
                    )
            }
            </div>
        </div>
    );
};

export default Pricelist;