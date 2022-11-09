import { Link } from "react-router-dom"
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
        <header>
            <ul className="flex p-2 justify-center bg-primary">
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                    <div className={current===1?"absolute w-0 h-0":"absolute w-44 h-44"}></div>
                        <Link to='/' 
                            onClick={handleCurrentMenu}
                            className={current===1
                                ?"bg-primary z-10 rounded-md inset-0 absolute before:content-['<'] before:text-terciary before:text-xl before:font-bold after:content-['/>'] after:text-terciary after:text-xl after:font-bold"
                                :"bg-primary z-10 rounded-md inset-[2px] absolute"}
                                >
                            Carlos Zalpa
                        </Link>
                    </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                    <div className={current===2?"absolute w-0 h-0":"absolute w-44 h-44"}></div>
                    <Link to='/About' 
                        onClick={handleCurrentMenu}
                        className={current===2
                            ?"bg-primary z-10 rounded-md inset-0 absolute before:content-['<'] before:text-terciary before:text-xl before:font-bold after:content-['/>'] after:text-terciary after:text-xl after:font-bold"
                            :"bg-primary z-10 rounded-md inset-[2px] absolute"}
                            >
                        Sobre mi
                    </Link>

                </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                    <div className={current===3?"absolute w-0 h-0":"absolute w-44 h-44"}></div>
                    <Link to='/Contact' 
                        onClick={handleCurrentMenu}
                        className={current===3
                            ?"bg-primary z-10 rounded-md inset-0 absolute before:content-['<'] before:text-terciary before:text-xl before:font-bold after:content-['/>'] after:text-terciary after:text-xl after:font-bold"
                            :"bg-primary z-10 rounded-md inset-[2px] absolute"}
                            >
                        Contacto
                    </Link>
                </li>
                <li className="w-1/2 flex justify-end">
                    <Flag code='MX' alt='MEX flag' className='w-12 mx-1'/>
                    <Flag code='USA' alt='USA flag' className='w-12 mx-1'/>
                </li>
            </ul>
        </header>
    )
}