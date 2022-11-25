import { useState } from "react"
import { Me } from "./Me"

export function AboutText(){
    const [menu,setMenu]=useState('Me')
    return(
        <div className='h-screen border top-2'>
            <ul className='flex border'>
                <li className='border px-3 py-2'>About</li>
                <li className='border px-3 py-2'>Experiencia</li>
                <li className='border px-3 py-2'>Work</li>
            </ul>
            <div>
                {menu==='Me' && <Me />}
            </div>
        </div>
    )
}