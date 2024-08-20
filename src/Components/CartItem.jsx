import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { remove } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';
const CartItem = ({item}) => {
    const dispatch=useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    function removeFromCart()
    {
        dispatch(remove(item.id));
        toast.error("Successfully removed");
    }
  return (
    <div className=' space-y-2 border py-4 rounded-md px-6 sm:w-[40rem] flex gap-4 hover:shadow-lg'>
        <div>
            <img src={item.image}/>
        </div>
        <div className=' flex flex-col justify-center gap-9'>
            <p className=' font-bold'>{item.title}</p>
            <p className=' opacity-60'>{item.description}</p>
            <div className=' flex justify-between'>
                <p>{item.price}</p>
                <div onClick={removeFromCart} className=' cursor-pointer text-red-800 border p-4 hover:bg-red-900 hover:text-white transition-all duration-200 rounded-md relative' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
                    
                
                    <MdDeleteForever />
                    <div className=' absolute -top-20'>
                    {isHovered && (
        <div className=' absolute -bottom-[6rem] -right-2 bg-red-700 text-white rounded-md py-2 px-4 cursor-pointer'
        >
          Delete
        </div>
      )}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem