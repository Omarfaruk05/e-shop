import React from 'react';
import { TruckIcon } from '@heroicons/react/outline'
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import PayCart from '../PayCart/PayCart';


const Payment = () => {
    return (
        <div className='lg:flex gap-4'>
           <PaymentMethod></PaymentMethod>
           <PayCart></PayCart>
        </div>
    );
};

export default Payment;