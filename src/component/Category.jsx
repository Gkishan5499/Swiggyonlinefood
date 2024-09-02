import { doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { foodref } from '../firebase/Firebase';

const Category = () => {
  const[slide ,setSlide]=useState(0);
   const[data, setData]= useState([]);
   const[loading, setLoading]= useState(false)

   useEffect(()=>{
        async function getData(){
          setLoading(true);
          const _data= await getDocs(foodref);

          _data.forEach((doc)=>{
            setData((prv)=>[...prv,{...(doc.data()),id:doc.id}])
          });
          setLoading(false);
        }
        getData();
   },[])

   const nextSlide=()=>{

    if(data.length-8 === slide) return (false)
        setSlide(slide+2)
   }
   const prevSlide=()=>{
    if(slide === 0) return (false)
    setSlide(slide-2)
}

  return (
    <>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between mt-4 '>
                <h2 className='text-[25px] font-semibold ml-[20px]'>What's on your mind?</h2>
                 <div className='flex gap-2'>
                    <div onClick={prevSlide} className='w-[40px] h-[40px] flex justify-center items-center bg-[#02060c80] rounded-full'>
                    <FaArrowLeft/></div>
                    <div onClick={nextSlide} className='w-[40px] h-[40px] flex justify-center items-center bg-[#02060c80] rounded-full'>
                    <FaArrowRight/></div>

                 </div>
            </div>
             
             <div className='flex gap-5 overflow-hidden items-center mt-4'>
            {
                data.map((e,i)=>{
                 return  (
                   <div style={{
                     transform:`translateX(-${slide * 100}%)`
                   }} 
                    key={i} className=" w-[150px] shrink-0 flex items-center flex-col text-center duration-300 " >
                      <img src={e.image} alt="image" className=' w-[120px] h-[120px] object-cover border rounded-full' />
                      <h3 className='mt-2 font-semibold text-[16px]'>{e.name}</h3>   
                   </div>
                )
               })
             }
             </div>


         <hr className='my-4 border ' />
        </div>

    </>
    
  )
}

export default Category