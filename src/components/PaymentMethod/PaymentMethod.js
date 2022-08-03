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

const PaymentMethod = () => {
    return (
        <div className='lg:w-1/2'>
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
    );
};

export default PaymentMethod;