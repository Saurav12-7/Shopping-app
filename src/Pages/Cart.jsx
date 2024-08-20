import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,cur)=>acc+cur.price,0));
    },[cart])
  return (
    <div  className=' h-screen mt-4'>
    {
        cart.length>0?(
            <div className=' flex gap-x-20 lg:flex-row flex-col'>
                <div>
                {
                    cart.map((item)=>(<CartItem item={item}/>))
                }
                </div>
                <div className=' flex flex-col justify-between mx-4'>
                    <div className=' flex flex-col gap-y-4'>
                        <h3 className=' font-bold text-3xl '>Your Cart</h3>
                        <h1 className=' text-green-800 font-bold text-5xl'>Summary</h1>
                        <p className=' font-bold'>Total Item: <span>{cart.length}</span></p>
                    </div>
                    <div className=' flex flex-col gap-y-4'>
                        <p className=' font-bold text-2xl'>Total Amount: <span>{totalAmount}</span></p>
                        <button className=' font-bold text-5xl text-white bg-green-800 p-4 rounded-lg mb-4'>
                            CheckOut Now
                        </button>
                    </div>
                </div>
            </div>
        ):(
            <div className=' justify-center items-center flex flex-col gap-4 h-[70%]'>
                <h1 className=' text-red-800 font-bold text-xl'>! Cart Empty</h1>
                <Link to='/'>
                    <button className=' border p-4 rounded-md hover:bg-gray-300 font-bold text-xl'>
                        Shop Now
                    </button>
                </Link>
            </div>
        )
    }
    </div>
  )
}

export default Cart