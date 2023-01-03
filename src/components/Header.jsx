import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react"
import Flag from 'react-world-flags'

export function Header(){
    const [current,setCurrent]=useState(1)
    
    function handleCurrentMenu(e){
        switch(e.target.innerHTML){
            case 'Carlos Zalpa':
                setCurrent(1)
                break;
            case 'Sobre mi':
                setCurrent(2)
                break;
            case 'Contacto':
                setCurrent(3)
                break;
            default: break;
        }
    }
    return(
        <nav className='fixed z-20 w-full'>
            <ul className="flex p-2 justify-center bg-primary">
                <li className="mx-2 w-52 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                    <div className="absolute w-44 h-44"></div>
                    <Link to='Home' spy={true} smooth={true} activeClass='seccionActive'                            
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        Carlos Zalpa
                    </Link>
                    </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                    <div className="absolute w-44 h-44"></div>
                    <Link to='About' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        Sobre mi
                    </Link>
                </li>                
                <li className="mx-2 w-52 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Skills' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        Habilidades
                    </Link>
                </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Contact' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        Contacto
                    </Link>
                </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Latestwork' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        Projectos
                    </Link>
                </li>
                <li className="w-1/2 flex justify-end">
                    <Flag code='MX' alt='MEX flag' className='w-12 mx-1'/>
                    <Flag code='USA' alt='USA flag' className='w-12 mx-1'/>
                </li>
            </ul>
        </nav>
    )
}