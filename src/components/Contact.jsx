import {HiOutlineChip} from "react-icons/hi";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

export function Contact(){   
    const {text} = useContext(LanguageContext) 
    return(
        <div className="flex flex-col items-center h-screen justify-evenly">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> {text.menuContact}</h1>         
            
                <p>{text.thanksText}</p>
                <div className="grid grid-cols-2 justify-items-center gap-8">
                    <div className="col-span-2">
                        <a href="https://www.linkedin.com/in/carlos-nedhel-zalpa-garcia-a8067322a/" target='_blank' rel='noreferrer'><SiLinkedin className="inline text-4xl"/> linkedin.com/in/carlos-nedhel-zalpa-garcia-a8067322a</a>
                    </div>
                    <div className=""><SiGmail className="inline text-4xl"/> nedhel.90@gmail.com</div>
                    <div className="">
                        <a href='https://github.com/Nedhel' target='_blank' rel='noreferrer'><SiGithub className="inline text-4xl"/> github.com/Nedhel</a>
                    </div>
                </div>
            
        </div>
    )
}