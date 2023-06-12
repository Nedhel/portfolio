import Language from '../context/Language'
import { useContext } from 'react'
export function Greeting(){
    const {text} = useContext(Language) 
    return(
        <div className='flex flex-col border'>
            <h1 className='font-bold text-2xl mb-4'>{text.greeting}</h1>
            <p className='px-4 border-l-4 border-[#151C9E] mt-4'>
                {text.introduceText}
            </p>
            <p className='px-4 border-l-4 border-[#151C9E]'>{text.aboutText}</p>
        </div>
    )
}