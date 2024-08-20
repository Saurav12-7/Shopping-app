import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';

const Home = () => {
    const API_URL='https://fakestoreapi.com/products';
    const [loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    async function fetchData(){
        setLoading(true);
        try {
            const res=await fetch(API_URL);
            const data=await res.json();
            setPosts(data);

        } catch (error) {
            console.log("Error in fetching");
        }
        setLoading(false);
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div className='w-10/12 mx-auto py-8 flex flex-wrap gap-8'>
    {
        loading?(<Spinner/>):(posts.length>0?(posts.map((item)=>(<Product key={item.id} item={item}/>))):(<div>
            <p>No Data Found</p>
        </div>))
    }
    </div>
  )
}

export default Home