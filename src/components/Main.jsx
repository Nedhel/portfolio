import { Greeting } from './Greeting'
import { Routes, Route, Link } from "react-router-dom"
import { Skills } from './Skills'
import Language from '../context/Language'
import { useContext } from 'react'
export function Main(){
    const {text}=useContext(Language)
    return(
        <main className="border flex-1 flex flex-wrap">
            <nav className="border flex-none w-52 p-4 flex justify-center items-center">
                <div className='fancyborder relative  '>
                    <div className='flex flex-col list-none bg-[#111111] w-32 rounded-tl-md'>
                        <Link to="skills" className='p-3'>{text.menuSkills}</Link>
                        <Link to="about" className='p-3'>{text.menuContact}</Link>
                        <ul className='border p-3'>
                            <li>Projectos</li>
                            <li className='pl-3'>
                            <Link to="about" className='p-3'>{text.menuContact}</Link>
                            </li>
                        </ul>
                                          
                    </div>
                </div>
            </nav>
            <div className="border border-red-500 flex-final w-52 flex flex-col justify-center items-center p-3">
            <Routes>
                <Route path="/"  element={<Greeting />} />
                <Route path="about" element={ <Skills /> } />                
                <Route path="skills" element={ <Skills /> } />                
            </Routes>
            </div>
        </main>
    )
}