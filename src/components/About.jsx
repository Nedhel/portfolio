import { useContext } from 'react'
import Language from '../context/Language'

export function About(){
    const {text}=useContext(Language)
    return(
        <div className='border'>
            <p>
            {text.aboutText}
            </p>
        </div>
    )
}