
import { useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

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
        <div className="border flex flex-col w-96 h-80 justify-evenly items-center relative bg-secondary">
            <div className="border relative">
                <img src={photos[number]} alt="" className='w-full'/>
                <button onClick={prevImage} className='text-primary text-xl absolute top-1/2 left-0' disabled={number===0?true:false}><BsFillArrowLeftCircleFill /></button> 
                <button onClick={nextImage} className='text-primary text-xl absolute top-1/2 right-0' disabled={number===photos.length-1?true:false}><BsFillArrowRightCircleFill /></button> 
            </div>
            <div className="border">
                {name}                
            </div>
            <div className='dropdown-description'>{description}</div>
        </div>
    )
}