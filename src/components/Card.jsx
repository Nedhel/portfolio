
import { useState } from 'react'
import wapp1 from '../assets/wapp1.jpg'
import wapp2 from '../assets/wapp2.jpg'

export function Card({name}){
    const [number, setNumber]=useState(0)
    const project=[wapp1,wapp2]
    function change(){
        
        console.log(number)
    }
    return (
        <div className="border w-96  flex justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full transition-all hover:-translate-y-[120px] hover:scale-y-[4] border">
                <img src={project[number]} alt="" className='fixed w-full h-14'/>
            </div>
            <div className="h-20">
                {name}
                <button onClick={change} className='border'>Cambiar</button>
            </div>
        </div>
    )
}