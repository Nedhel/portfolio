import { Skill } from "./Skill"
import { useContext } from 'react'
import Language from '../context/Language'

export function Skills(){
    const {text}=useContext(Language)
    const skills=[{
        id:1,
        name:'HTML',
        textColor:'text-orange-700',
        percentage:'w-11/12',
        bgColor:'bg-orange-700',
        knowladge: 90
    },
    {
        id:2,
        name:'CSS',
        textColor:'text-blue-800',
        percentage:'w-11/12',
        bgColor:'bg-blue-800',
        knowladge: 90
    },
    {
        id:3,
        name:'JAVASCRIPT',
        textColor:'text-yellow-400',
        percentage:'w-11/12',
        bgColor:'bg-yellow-400',
        knowladge: 90
    },
    {
        id:4,
        name:'REACT',
        textColor:'text-cyan-400',
        percentage:'w-1/2',
        bgColor:'bg-cyan-400',
        knowladge: 50
    },
    {
        id:5,
        name:'GIT',
        textColor:'text-orange-700',
        percentage:'w-1/3',
        bgColor:'bg-orange-700',
        knowladge: 30
    },
    {
        id:6,
        name:'GITHUB',
        textColor:'text-white',
        percentage:'w-2/5',
        bgColor:'bg-slate-700',
        knowladge: 40
    },
    {
        id:7,
        name:'TAILWIND',
        textColor:'text-cyan-500',
        percentage:'w-4/6',
        bgColor:'bg-cyan-500',
        knowladge: 66
    },
    {
        id:8,
        name:'JIRA',
        textColor:'text-blue-700',
        percentage:'w-3/5',
        bgColor:'bg-blue-700',
        knowladge: 60
    }]
    return (
        <div className="flex flex-col justify-between border gap-3 md:gap-10 lg:gap-20">
            <h1 className='font-bold text-2xl'>{text.menuSkills}</h1>         
            <div className='flex justify-around flex-wrap gap-4 px-4 border-l-4 border-[#151C9E]'>
            {skills.map(item=>{
                return item.id<10?<Skill skill={item} key={item.id} />:null 
            })}
            </div>
        </div>
    )
}