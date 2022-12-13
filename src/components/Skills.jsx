import { Skill } from "./Skill"
import {HiOutlineChip} from "react-icons/hi";

export function Skills(){
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
        percentage:'w-4/5',
        bgColor:'bg-yellow-400',
        knowladge: 80
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
        percentage:'w-1/5',
        bgColor:'bg-orange-700',
        knowladge: 20
    },
    {
        id:6,
        name:'GITHUB',
        textColor:'text-white',
        percentage:'w-2/5',
        bgColor:'bg-white',
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
        <div className="h-96 flex flex-col justify-between">
            <svg className='w-full h-32'>            
            <polygon points="0,0 0,128 300,128 300,50 600,50 600,10 900,10 900,128 1200,128 1200,20 1300,20 1300,128 1400,128 1400,0 " className='fill-secondary' />
            <polygon points="0,180 0,20 150,20 150,100 300,100 300,180 900,180 900,60 1000,60 1000,180 1300,180 1300,0 1350,0 1350,180 " className='fill-stone-800' />
            Sorry, your browser does not support inline SVG.
            </svg>
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Habilidades</h1>         
            <div className='flex justify-around'>
            {skills.map(item=>{
                return item.id<5?<Skill skill={item} key={item.id} />:null 
            })}
            </div>
        </div>
    )
}