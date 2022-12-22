
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Card({name, description, photos}){
    const [number, setNumber]=useState(0)

    function nextImage(){
        setNumber(prev=>prev+1)
        console.log(number)
    }
    function prevImage(){
        setNumber(prev=>prev-1)
        console.log(number)
    }
    return (
        <div className="flex flex-col w-96 h-80 justify-evenly items-center relative bg-primary shadow-md shadow-white">
            <div className="border relative mask">
                <img src={photos[number]} alt="" className='w-full'/>
            </div>
            <button onClick={prevImage} className='text-white text-2xl absolute hidden arrow top-1/4 left-0' disabled={number===0?true:false}><IoIosArrowBack /></button> 
            <button onClick={nextImage} className='text-white text-2xl absolute hidden arrow top-1/4 right-0' disabled={number===photos.length-1?true:false}><IoIosArrowForward /></button> 
            <div>
                {name}                
            </div>
            <div className='dropdown-description text-sm'>{description}</div>
        </div>
    )
}