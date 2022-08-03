import React from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
const NavComponent = () => {
    return (
        <div>
            <div class="navbar container mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/men">Men</NavLink></li>
                        <li><NavLink to="/women">Women</NavLink></li>                    
                        <li><NavLink to="/kids">Kids</NavLink></li>
                    </ul>
                    </div>
                    <NavLink to={'/'} ><div className='text-xl font-semibold'><span className='text-orange-500 mr-1'>E</span>shop</div></NavLink>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                    <li><NavLink to="/men">Men</NavLink></li>
                        <li><NavLink to="/women">Women</NavLink></li>                    
                        <li><NavLink to="/kids">Kids</NavLink></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <SearchIcon className='w-6 mr-3'/>
                    <ShoppingCartIcon className='w-6 mr-3'/>
                    <UserIcon className='w-6 mr-3'/>
                </div>
            </div>
            <hr  className='shadow'/>
        </div>
    );
};

export default NavComponent;