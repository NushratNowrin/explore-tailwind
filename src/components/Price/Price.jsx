import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/24/solid'

const Price = ({price}) => {
    return (
        <div className='p-3 bg-indigo-500 rounded-lg text-white py-5'>
            <div className='text-center mb-4'>
                <span className='text-5xl font-bold'>{price.price}</span>
                <span>/month</span>
            </div>
            <h2 className="text-2xl text-center font-semibold my-3">{price.name}</h2>
            <div className='px-3'>Features: 
                {
                    price.features.map(feature => 
                       <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className="h-6 w-6 text-white" /><li className='list-none p-2'>{feature}</li>
                       </div>
                        )
            
                }
            </div>
        </div>
    );
};

export default Price;