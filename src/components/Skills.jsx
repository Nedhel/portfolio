import { Skill } from "./Skill"

export function Skills(){
    const skills=[{
        id:1,
        name:'HTML',
        textColor:'text-orange-700',
        percentage:'w-11/12',
        bgColor:'bg-orange-700'
    },
    {
        id:2,
        name:'CSS',
        textColor:'text-blue-800',
        percentage:'w-11/12',
        bgColor:'bg-blue-800'
    },
    {
        id:3,
        name:'JAVASCRIPT',
        textColor:'text-yellow-400',
        percentage:'w-4/5',
        bgColor:'bg-yellow-400'
    },
    {
        id:4,
        name:'REACT',
        textColor:'text-cyan-400',
        percentage:'w-1/2',
        bgColor:'bg-cyan-400'
    },
    {
        id:5,
        name:'GIT',
        textColor:'text-orange-700',
        percentage:'w-1/5',
        bgColor:'bg-orange-700'
    },
    {
        id:6,
        name:'GITHUB',
        textColor:'text-white',
        percentage:'w-2/5',
        bgColor:'bg-white'
    },
    {
        id:7,
        name:'TAILWIND',
        textColor:'text-cyan-500',
        percentage:'w-4/6',
        bgColor:'bg-cyan-500'
    },
    {
        id:8,
        name:'JIRA',
        textColor:'text-blue-700',
        percentage:'w-3/5',
        bgColor:'bg-blue-700'
    }]
    return (
        <>
        <h1 className='text-terciary text-2xl font-semibold text-center'>Habilidades</h1>
        <div className='flex justify-around'>
        {skills.map(item=>{
            return item.id<5?<Skill skill={item} key={item.id} />:null 
        })}
        </div>
        </>
    )
}