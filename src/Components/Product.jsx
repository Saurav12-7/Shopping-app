import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/slices/CartSlice';

const Product = ({item}) => {
    const des=`${item.description.substr(0,100)} ...`;
    const {cart}=useSelector((state)=>state);

    const dispatch=useDispatch();

    function removeHandler()
    {
        dispatch(remove(item.id));
        toast.error("Successfully removed");
    }

    function addHandler()
    {
        dispatch(add(item));
        toast.success("Successfully added");
    }
  return (
    <div className=' w-72 space-y-2 border py-4 rounded-md px-6 hover:shadow-lg'>
        <div><img src={item.image} className=' h-64'/></div>
        <div><p>{item.title}</p></div>
        <div><p>{des}</p></div>
        <div><p>{item.price}</p></div>
        {
            cart.some((p)=>p.id==item.id)?(<button onClick={removeHandler} className=' border p-4 rounded-lg hover:bg-gray-200 hover:font-bold transition-all duration-200 hover:border-black '>
                Remove Item
            </button>):(<button onClick={addHandler} className=' border p-4 rounded-lg hover:bg-gray-200 hover:font-bold transition-all duration-200 hover:border-black '>
                Add To Cart
            </button>)
        }
    </div>
  )
}

export default Product