import { doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { restref } from '../firebase/Firebase';
import Card from './Card';

const TopResturent = () => {
   const[slide ,setSlide]=useState(0);
   const[data, setData]= useState([]);
   const[loading, setLoading]= useState(false);

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

   const nextSlide=()=>{

    if(data.length-3 === slide) return (false)
        setSlide(slide+1)
   }
   const prevSlide=()=>{
    if(slide === 0) return (false)
    setSlide(slide-1)
}

  return (
    <>
        <div className='max-w-[1200px] mx-auto my-10'>
            <div className='flex items-center justify-between mt-4 '>
                <h2 className='text-[25px] font-semibold ml-[20px]'>Top restaurant chains in Varanasi</h2>
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
                   <Card width="w-full md:w-[274px]" 
                    {...e} key={i} 
                    style={{
                    transform:`translateX(-${slide * 100}%)`
                   }} />
                )
               })
             }
             </div>


        <hr className='my-10 border'/>
        </div>

    </>
    
  )
}

export default TopResturent