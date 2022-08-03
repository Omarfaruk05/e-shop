import React from 'react';
import payment1 from '../../assets/payment/paypal.png'
import payment2 from '../../assets/payment/visa.png'
import payment3 from '../../assets/payment/master-card.png'
import payment4 from '../../assets/payment/payoneer.png'
import payment5 from '../../assets/payment/discover.png'
import payment6 from '../../assets/payment/ideal.png'
import delivery1 from '../../assets/delivery/inpost.png'
import delivery2 from '../../assets/delivery/dpd.png'
import delivery3 from '../../assets/delivery/dhl.png'
import delivery4 from '../../assets/delivery/fedex.png'
import { TruckIcon } from '@heroicons/react/outline'
import axios from 'axios';


const Payment = () => {
    const totalPrice = 159.98; 

    const handlePayment= async()=> {
      try {
        fetch("http://localhost:5000/orders",
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({amount:totalPrice})
        })
        .then(res => res.json())
        .then(data => console.log(data));
      } catch (error) {
        console.log(error)
      } 
    }
    return (
        <div>
            <div className='lg:flex gap-4'>
                <div className='lg:w-1/2 lg:mt-8'>
                        <div>
                            <h4 className='text-lg ml-2 mb-4'>Payment method</h4>
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-2 justify-center items-center'>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment1} alt="" />
                                </div>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment2} alt="" className='h-7 ml-3' />
                                </div>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment3} alt="" className='h-7 ml-5' />
                                </div>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment4} alt="" className='h-7 ml-7' />
                                </div>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment5} alt="" className='h-7' />
                                </div>
                                <div className='w-32 border-2 rounded-full px-4 py-2'>
                                    <img src={payment6} alt=""  className='h-7 ml-7'/>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-lg ml-2 mt-8 mb-4'>Delivery method</h4>
                                <div className='grid grid-cols-2 justify-between items-center gap-3'>
                                    <div className='w-44 border-2 rounded-full px-4 py-2 flex justify-between items-center'>
                                        <img src={delivery1} alt=""  className='h-7 ml-0'/>
                                        <p>$20.00</p>
                                    </div>
                                    <div className='w-44 border-2 rounded-full px-4 py-2 flex justify-between items-center'>
                                        <img src={delivery2} alt=""  className='h-7 ml-0'/>
                                        <p>$12.00</p>
                                    </div>
                                    <div className='w-44 border-2 rounded-full px-4 py-2 flex justify-between items-center'>
                                        <img src={delivery3} alt=""  className='h-7 ml-0'/>
                                        <p>$15.00</p>
                                    </div>
                                    <div className='w-44 border-2 rounded-full px-4 py-2 flex justify-between items-center'>
                                        <img src={delivery4} alt=""  className='h-8 ml-0'/>
                                        <p>$10.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className='lg:w-1/2 px-2'>
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
                                <p>${totalPrice}</p>
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
            </div>
            <div className='flex justify-end mt-20'>
                <button className='btn bg-white border-2 border-gray-600 rounded-full mr-2'>CONTINUE SHOPPING</button>
                <button onClick={handlePayment} className='btn bg-green-400 border-2 border-green-400 text-white rounded-full '>PROCEED TO PAYMENT</button>
            </div>
        </div>
    );
};

export default Payment;