import React, { useState } from 'react'
import { BiSolidOffer } from 'react-icons/bi';
import { CgShoppingBag } from 'react-icons/cg';
import { CiDiscount1 } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'
import { IoCart, IoHelpBuoy, IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';





const Header = () => {

  const links= [
    {
      icon:<IoSearch/>,
      name:"Search"
    },
    {
      icon:<CiDiscount1/>,
      name:"Offers",
      sup:"new"
    },
    {
      icon:<IoHelpBuoy/>,
      name:"Help"
    },
    {
      icon:<FaRegUser/>,
      name:"Sign In"
    },
    {
      icon:<CgShoppingBag/>,
      name:"Cart"
    }
]

  const[toggle, setToggle] = useState(false);

  const showToggle=()=>{
     setToggle(true);
  }

  const hideSidebar=()=>{
    setToggle(false);
  }
 
  return ( 
    <>
     <div className='body-overlay w-full h-full fixed duration-500' onClick={hideSidebar} style={{
       opacity: toggle ? 1:0,
       visibility:toggle? "visible":"hidden"
     }}>
         <div onClick={(e)=>{
          e.stopPropagation();
         }} className='w-[400px] bg-white h-full duration-300 absolute'
         style={{
           left:toggle?'0%':'-100%'   
         }}>
          <RxCross2 onClick={hideSidebar} className='w-8 h-8 m-5'/>
         </div>
     </div>
      <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
       <div className='max-w-[1200px] mx-auto  flex items-center'>
           <div className='w-[100px]'>
           <Link to="/" ><img src="images/logo.png" alt="" className='w-full' /></Link>
           </div>
           <div className=''>
           <span className='font-bold border-b-[2px] border-b-[black]'>Varanasi</span> Uttar Pradesh, India 
           <IoIosArrowDown className='inline text-[#fc8019] cursor-pointer' onClick={showToggle} />
           </div>
          
          <nav className=' hidden md:flex list-none gap-10 ml-auto font-semibold text-[16px]'>
          {
            links.map((link, i)=>{
             return <li key={i} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                {link.icon} {link.name}
                <sup>{link.sup}</sup>
              </li>
            })
          }
          
         


          </nav>

       </div>
    </header>

</>
  )
}

export default Header