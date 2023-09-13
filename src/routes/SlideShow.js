import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import image1 from '../Images/Banners/Banner1.png';
import image2 from '../Images/Banners/Banner2.png';
import image3 from '../Images/Banners/Banner3.png';
import image4 from '../Images/Banners/Banner4.png';
import image5 from '../Images/Banners/Banner5.png';

function SlideShow(){

const[flag,setflag]=useState(0);
let bannerArray=[image1, image2,image3,image4,image5];

return(
<div className='relative lg:w-full w-[80%] center overflow-hidden' className='relative w-full center '>
    <img className='w-full bannerAnimate -z-20' src={bannerArray[flag]}/>
    <div className='absolute w-full h-[60px] flex justify-between '>
        <button className=' '
         onClick={()=>{
            if( flag>0 ){ setflag(flag -1) }
            else{ setflag(bannerArray.length -1)}
        }}>

        <i className="text-[26px] "></i></button>

        <button className='px-4 py-[10px] cursor-pointer bg_blur1 rounded-2xl text-black center mr-[10px] bg-red-600 '
        onClick={()=>{
            if( flag<4 ){ setflag(flag +1) }
            else{ setflag(0) }
        }}>

        <i className="text-[26px] "></i></button>
    </div>
    <div className='absolute w-full h-[100px] bottom-[10px] center '>
        <div className='w-[300px] flex justify-evenly '>
            <button className={flag === 0 ? 'btn_dot bg_blur1' : 'btn_dot bg_blur2'} onClick={()=> setflag(0) }></button>
            <button className={flag === 1 ? 'btn_dot bg_blur1' : 'btn_dot bg_blur2'} onClick={()=> setflag(1) }></button>
            <button className={flag === 2 ? 'btn_dot bg_blur1' : 'btn_dot bg_blur2'} onClick={()=> setflag(2) }></button>
            <button className={flag === 3 ? 'btn_dot bg_blur1' : 'btn_dot bg_blur2'} onClick={()=> setflag(3) }></button>
            <button className={flag === 4 ? 'btn_dot bg_blur1' : 'btn_dot bg_blur2'} onClick={()=> setflag(4) }></button>
        </div>
    </div>
</div>
)}
export default SlideShow;