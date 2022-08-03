import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline'


const Login = () => {
    return (
        <div>
            <div>
                <div>
                    <button className='btn bg-green-500 rounded-full text-white w-36 mr-4'>LOG IN</button>
                    <button className='btn   rounded-full w-36 mr-4  border-2 bg-white'>SING UP</button>
                </div>
                <h4 className='text-lg  my-8 ml-2'>Shipping information</h4>
                <div>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input type="email" required placeholder="Email" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="text" required placeholder="Adddress" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="text" required placeholder="First name" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="text" required placeholder="Last name" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="text" required placeholder="City" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="text" required placeholder="Postal Code / ZIP" class="input input-bordered w-full max-w-full rounded-full" />
                        <input type="number" required placeholder="Phone number" class="input input-bordered w-full max-w-full rounded-full" />
                        <select  required class="select select-bordered w-full max-w-full rounded-full">
                            <option disabled selected>Countries</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                            <option>Poland</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className='mt-24 hidden lg:block'>
                <ArrowLeftIcon className='w-6'></ArrowLeftIcon>
            </div>
        </div>
    );
};

export default Login;