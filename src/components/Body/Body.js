import React from 'react';
import { ShoppingCartIcon, TruckIcon } from '@heroicons/react/outline'
import Login from '../Login/Login';
import Payment from '../Payment/Payment';

const Body = () => {
    return (
        <div className='container mx-auto mb-4'>
            <div className='flex justify-between items-center mx-6 my-8'>
                <h3 className='text-xl font-semibold'>Shipping and Payment</h3>
                <div className='flex items-center'>
                    <div className='border p-1 rounded-full border-green-400'>
                        <ShoppingCartIcon className='w-6 text-gray-500 '/>
                    </div>
                    <div className='w-24 h-[2px] mx-2 bg-gray-300'></div>
                    <div className='border p-1 border-green-400 rounded-full bg-green-400 text-white '>
                        <TruckIcon className='w-6'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='lg:w-1/3'>
                    <Login></Login>
                </div>
                <div className='lg:w-2/3 lg:pl-12'>
                    <Payment></Payment>
                </div>
            </div>
        </div>
    );
};

export default Body;