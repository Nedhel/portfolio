import '../styles/portfolio.css'
import mex_flag from '../assets/mexico.png'
import usa_flag from '../assets/usa.png'
export function Navbar(){
    return(
        <nav className="flex justify-center">
            <ul className="border flex-1 flex">
                <li className="text-3xl effect3d">ZALPA</li>
            </ul>
            <ul className="border flex-1 flex justify-end gap-5">
                <li className="border grayscale hover:grayscale-0"><img src={mex_flag} alt="Mexican flag" /></li>
                <li className="border grayscale hover:grayscale-0"><img src={usa_flag} alt="USA flag" /></li>
            </ul>
        </nav>
    )
}