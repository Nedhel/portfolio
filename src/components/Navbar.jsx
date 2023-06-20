import mex_flag from '../assets/mexico.png'
import usa_flag from '../assets/usa.png'
import { useContext } from "react";
import Language from "../context/Language";
import { Link } from "react-router-dom"
export function Navbar(){
    const { handleLanguage }=useContext(Language)
    return(
        <nav className="flex justify-center item1 rounded-md">
            <ul className=" flex-1 flex">
                <li className="lg:text-3xl md:text-xl text-lg font-bold"><Link to="/">ZALPA</Link></li>
            </ul>
            <ul className=" flex-1 flex justify-end gap-5 px-2">
                <li className=" grayscale hover:grayscale-0"><img src={mex_flag} alt="Mexican flag" onClick={()=>handleLanguage('ES')} /></li>
                <li className=" grayscale hover:grayscale-0"><img src={usa_flag} alt="USA flag" onClick={()=>handleLanguage('EN')}/></li>
            </ul>
        </nav>
    )
}