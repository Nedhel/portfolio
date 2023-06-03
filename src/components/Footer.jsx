import '../styles/portfolio.css'
import mex_flag from '../assets/mexico.png'
import usa_flag from '../assets/usa.png'
export function Navbar(){
    return(
        <footer className="flex justify-center">
            <ul className="border flex-1 flex justify-end gap-5">
                <li className="border grayscale hover:grayscale-0"><img src={mex_flag} alt="Mexican flag" /></li>
                <li className="border grayscale hover:grayscale-0"><img src={usa_flag} alt="USA flag" /></li>
            </ul>
            <ul className="border flex-1 flex">
                <li>2023 Carlos Zalpa</li>
            </ul>
        </footer>
    )
}