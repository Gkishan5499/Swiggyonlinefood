import { doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { restref } from '../firebase/Firebase';
import Card from './Card.jsx';

const OnlineDelivery = () => {
    const myRef = useRef(null);
    const [isTop, setIsTop] = useState(false);
    const[data, setData]= useState([]);
    const[loading, setLoading] = useState(false);
    useEffect(()=>{
        async function getData(){
          setLoading(true);
          const _data= await getDocs(restref);

          _data.forEach((doc)=>{
            setData((prv)=>[...prv,{...(doc.data()),id:doc.id}])
          });
          setLoading(false);
        }
        getData();
   },[])


  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current) {
        const rect = myRef.current.getBoundingClientRect();
        // Check if the top of the element has reached top: 0
        if (rect.top <= 0) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
      }
    };
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  return (
     <div className='max-w-[1200px] mx-auto my-10' ref={myRef}>
            <div className='flex items-center justify-between mt-4 '>
                <h2 className='text-[25px] font-semibold ml-[20px]'>Restaurants with online food delivery in Varanasi</h2>
                </div>
                <div className={isTop ?'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-4'>
                <div className='p-3 border border-gray-200 rounded-md '>Filter</div>
                <div className='p-3 border border-gray-200 rounded-md '>Sort By</div>
                <div className='p-3 border border-gray-200 rounded-md '>Fast Delivery</div>
                <div className='p-3 border border-gray-200 rounded-md '>New On Swiggy</div>

                </div>


                </div>
                 <div className='grid grid-cols-2  md:grid-cols-4 gap-2 my-5'>
                 {
                data.map((e,i)=>{
                 return  (
                   <Card
                    {...e} key={i} />
                )
               })
             }
           </div>
            
     </div>
  )
}

export default OnlineDelivery