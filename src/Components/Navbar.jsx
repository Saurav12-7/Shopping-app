import React from 'react'
import img1 from '../image/00583b5597be482b947ef72157879759.jpg';
import { IoIosCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {cart}=useSelector((state=>state));
  return (
    <div className=' border-b-2 sticky top-0 bg-white shadow-lg z-[100]'>

    <div className=' flex justify-between py-3 w-10/12 mx-auto' >
        <NavLink to='/'>

            <div >
                <img src={img1} width='90px' className='rounded-md border'/>
            </div>
        </NavLink>
        <div className=' flex items-center gap-4 relative'>
            <NavLink to='/'>
                <p className=' font-bold'>Home</p>
            </NavLink>
            <NavLink to='/cart'>
                <IoIosCart  className=' text-3xl'/>
                <div className=' absolute top-4 z-10 text-red-900 font-bold text-2xl left-[3.569rem]'>{cart.length>0?cart.length:""}</div>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Navbar
