
import { useState } from 'react'

export function Card({project}){
    const [isBack, setIsBack]=useState(false)
    
    function turnCard(){
        setIsBack(!isBack)
    }
    return (
        <div className='cardContainer' onClick={turnCard}>
            <div className={isBack?'card active':'card'}>
                <div className='side faceA'>
                    <div className='w-full h-3/4 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${project.background})`}}>
                    </div>
                    <div className='text-center font-semibold'>
                        <p>{project.name}</p>
                    </div>
                </div>
                <div className='side faceB flex flex-col justify-evenly items-center px-5'>
                    <h1 className='font-bold text-xl'>{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>

        
    )
}