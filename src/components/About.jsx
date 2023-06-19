import { Skill } from "./Skill"

import { useContext } from 'react'
import Language from '../context/Language'
import { Link } from "react-router-dom"
import pdf from '../assets/resume.pdf'

export function About(){
    const {text}=useContext(Language)
    const skills=[{
        id:1,
        name:'HTML',
        percentage:'w-11/12',
        knowladge: 90
    },
    {
        id:2,
        name:'CSS',
        percentage:'w-11/12',
        knowladge: 90
    },
    {
        id:3,
        name:'JAVASCRIPT',
        percentage:'w-11/12',
        knowladge: 90
    },
    {
        id:4,
        name:'REACT',
        percentage:'w-3/5',
        knowladge: 60
    },
    {
        id:5,
        name:'GIT',
        percentage:'w-1/2',
        knowladge: 50
    },
    {
        id:6,
        name:'GITHUB',
        percentage:'w-1/2',
        knowladge: 50
    },
    {
        id:7,
        name:'TAILWIND',
        percentage:'w-3/5',
        knowladge: 60
    },
    {
        id:8,
        name:'JIRA',
        percentage:'w-3/5',
        knowladge: 60
    }]
    return (
        <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
            <h1 className='font-bold text-2xl'>{text.menuAbout}</h1>
            <p className="border-l-4 border-[#2BA30A] px-4 leading-loose text-justify">{text.aboutText}</p>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download='Resume Carlos Zalpa' className="border border-[#2BA30A] w-fit rounded-md p-1 self-center">Download resume</a>
            <h1 className='font-bold text-2xl'>{text.menuSkills}</h1>         
            <div className='border-l-4 border-[#2BA30A] px-4'>
            {skills.map(item=>{
                return item.id<10?<Skill skill={item} key={item.id} />:null 
            })}
            </div>
        </div>
    )
}