import Language from '../context/Language'
import { useContext } from 'react'
export function Greeting(){
    const {text} = useContext(Language)
    return(
        <div className='flex flex-col'>                
            <h1 className='font-bold text-4xl mb-3 md:mb-10 lg:mb-20 textshadow'>{text.greeting}</h1>       
            <p className='px-4 border-l-4 border-[#2BA30A] leading-loose text-justify'>
                {text.introduceText}
            </p>
            <p className='px-4 border-l-4 border-[#2BA30A] leading-loose text-justify'>{text.aboutText}</p>
        </div>
    )
}