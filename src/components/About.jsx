import Programmer from '../assets/Programmer.svg'

export function About(){
    
    return (
        <div className='h-screen bg-secondary'>
            <svg className='w-full h-32'>            
            <polygon points="0,0 0,128 300,128 300,50 600,50 600,10 900,10 900,128 1200,128 1200,20 1300,20 1300,128 1400,128 1400,0 " className='fill-primary' />
            <polygon points="0,180 0,20 150,20 150,100 300,100 300,180 900,180 900,60 1000,60 1000,180 1300,180 1300,0 1350,0 1350,180 " className='fill-stone-800' />
            
            Sorry, your browser does not support inline SVG.
            </svg>           
        
        <img src={Programmer} alt="Programmer" className='w-64' />
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
        
        </div>
    )
}