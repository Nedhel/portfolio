import Programmer from '../assets/Programmer.svg'
import {HiOutlineChip} from "react-icons/hi";

export function About(){
    
    return (
        <div className='h-screen bg-secondary'>
            <svg className='w-full h-32'>            
            <polygon points="0,0 0,128 300,128 300,50 600,50 600,10 900,10 900,128 1200,128 1200,20 1300,20 1300,128 1400,128 1400,0 " className='fill-primary' />
            <polygon points="0,180 0,20 150,20 150,100 300,100 300,180 900,180 900,60 1000,60 1000,180 1300,180 1300,0 1350,0 1350,180 " className='fill-stone-800' />
            Sorry, your browser does not support inline SVG.
            </svg>            
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Sobre</h1>         
            <div className='flex justify-around items-center h-2/3'>
                <div className='w-1/3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras dictum eget elit sed interdum. Donec elit mauris, 
                        vestibulum vitae mi vel, porta cursus lectus. 
                        Donec in aliquam leo, ac vulputate nibh. Morbi leo neque, 
                        sagittis malesuada ultricies eu, ullamcorper sed enim. Maecenas 
                        malesuada, eros et tincidunt consectetur, nulla risus lobortis enim, 
                        ac euismod lacus ligula nec metus
                    </p>
                </div>
                <div className='relative w-1/3'>
                    <div className='font-semibold text-sm bg-[#3A474E] w-fit replace-text absolute top-[136px] left-9'>REACT</div>
                    <img src={Programmer} alt="Programmer" className='w-96' />
                    <a href="https://storyset.com/web" className='text-xs'>Web illustrations by Storyset</a>
                </div>
            </div>
            
        
        </div>
    )
}