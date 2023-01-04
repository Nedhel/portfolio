import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'
import wapp from '../assets/wapp1.jpg'
import notes from '../assets/notes1.jpg'
import reminder from '../assets/reminder2.jpg'
import todo from '../assets/todo2.jpg'
import tictactoe from '../assets/tictactoe2.jpg'
import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

export function Latestwork(){
    const {text} = useContext(LanguageContext)
    const projects=[
        {
            name:text.project1Name,
            description:text.project1Description,
            background:wapp
        },
        {
            name:text.project2Name,
            description:text.project2Description,
            background:reminder
        },
        {
            name:text.project3Name,
            description:text.project3Description,
            background:notes
        },
        {
            name:text.project4Name,
            description:text.project4Description,
            background:todo
        },
        {
            name:text.project5Name,
            description:text.project5Description,
            background:tictactoe
        }
    ]
    return(
        <div className="flex flex-col justify-evenly h-[150vh]">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> {text.menuProjects}</h1>
            <div className="flex justify-evenly">
                <Card project={projects[0]}/>
                <Card project={projects[1]}/>
            </div>
            <div className="flex justify-evenly">
                <Card project={projects[2]}/>
                <Card project={projects[3]}/>
                <Card project={projects[4]}/>
            </div>
        </div>
    )
}