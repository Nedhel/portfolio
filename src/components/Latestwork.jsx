import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'
import wapp from '../assets/wapp1.jpg'
import notes from '../assets/notes1.jpg'
import reminder from '../assets/reminder2.jpg'
import todo from '../assets/todo2.jpg'
import tictactoe from '../assets/tictactoe2.jpg'
import creditcard from '../assets/card.jpg'
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
        },
        {
            name:text.project6Name,
            description:text.project6Description,
            background:creditcard
        }
    ]
    return(
        <div className="flex flex-col justify-evenly min-h-screen gap-5">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> {text.menuProjects}</h1>
            <div className="flex justify-evenly flex-wrap gap-5">
                <Card project={projects[0]}/>
                <Card project={projects[1]}/>
                <Card project={projects[2]}/>
            </div>
            <div className="flex justify-evenly flex-wrap gap-5">
                <Card project={projects[3]}/>
                <Card project={projects[4]}/>
                <Card project={projects[5]}/>
            </div>
        </div>
    )
}