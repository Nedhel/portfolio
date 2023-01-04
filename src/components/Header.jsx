import { Link} from "react-scroll";
import Flag from 'react-world-flags'
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export function Header(){
    const {text, handleLanguage}=useContext(LanguageContext)
    return(
        <nav className='fixed z-20 w-full cursor-pointer'>
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
                        {text.menuAbout}
                    </Link>
                </li>                
                <li className="mx-2 w-52 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Skills' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        {text.menuSkills}
                    </Link>
                </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Contact' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        {text.menuContact}
                    </Link>
                </li>
                <li className="mx-2 w-40 relative flex justify-center items-center overflow-hidden rounded-md text-center">
                <div className="absolute w-44 h-44"></div>
                    <Link to='Latestwork' spy={true} smooth={true} activeClass='seccionActive'
                        className="bg-primary z-10 rounded-md inset-[2px] absolute">
                        {text.menuProjects}
                    </Link>
                </li>
                <li className="w-1/2 flex justify-end">
                    <Flag code='MX' alt='MEX flag' className='w-12 mx-1' onClick={()=>handleLanguage('ES')} />
                    <Flag code='USA' alt='USA flag' className='w-12 mx-1' onClick={()=>handleLanguage('EN')} />
                </li>
            </ul>
        </nav>
    )
}