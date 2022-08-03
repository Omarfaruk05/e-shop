import React from 'react';
import { TruckIcon } from '@heroicons/react/outline'

const PayCart = () => {
    return (
        <div  className='lg:w-1/2 px-2'>
                <h4 className='text-lg ml-2 mt-8 mb-4'>Your cart</h4>
                <div>
                    <div className='flex justify-between items-center gap-3 my-4'>
                        <div className='flex'>
                            <div class="avatar">
                                <div class="w-12 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='avatar' />
                                </div>
                            </div>
                            <div className='ml-3'>
                                <h5>T-Shirt Summer Vibes</h5>
                                <p className='text-gray-300'>#261311</p>
                            </div>
                        </div>
                        <div className=''>
                            <p>$89.99</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <div className='flex'>
                            <div class="avatar">
                                <div class="w-12 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='avatar' />
                                </div>
                            </div>
                            <div className='ml-3'>
                                <h5>T-Shirt Summer Vibes</h5>
                                <p className='text-gray-300'>#261311</p>
                            </div>
                        </div>
                        <div className=''>
                            <p>$69.99</p>
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-full flex justify-around itmes-center py-4 font-semibold mt-8'>
                        <p>Total cost</p>
                        <p>$159.98</p>
                    </div>
                    <div className='flex justify-start items-center gap-4 p-8'>
                        <div>
                            <TruckIcon className='w-6'></TruckIcon>
                        </div>
                        <div>
                            <p>You are $30,02 away from free shipping!</p>
                        </div>
                    </div>
                </div>
           </div>
    );
};

export default PayCart;