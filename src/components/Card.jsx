
import { useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export function Card({name, description, photos}){
    const [number, setNumber]=useState(0)
    const [isBack, setIsBack]=useState(false)

    function nextImage(){
        setNumber(prev=>prev+1)
        console.log(number)
    }
    function prevImage(){
        setNumber(prev=>prev-1)
        console.log(number)
    }
    function turnCard(){
        setIsBack(!isBack)
    }
    return (
        <div className='cardContainer' onClick={turnCard}>
            <div className={isBack?'card active':'card'}>
                <div className='side faceA'>
                    <img src={photos} alt={name} />
                    <button onClick={prevImage} className='text-2xl absolute arrow top-1/4 left-0' disabled={number===0?true:false}><IoIosArrowDropleftCircle /></button> 
                    <button onClick={nextImage} className='text-2xl absolute  arrow top-1/4 right-0' disabled={number===photos.length-1?true:false}><IoIosArrowDroprightCircle /></button> 
                    <p>{name}</p>
                </div>
                <div className='side faceB flex flex-col justify-center items-center border'>
                    <h1 className='font-bold text-xl'>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>

        
    )
}