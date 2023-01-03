import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'
import wapp from '../assets/wapp1.jpg'
import notes from '../assets/notes1.jpg'
import reminder from '../assets/reminder2.jpg'
import todo from '../assets/todo2.jpg'
import tictactoe from '../assets/tictactoe2.jpg'

export function Latestwork(){
    const projects=[
        {
            name:'Clone de WhatsApp',
            description:'Creada con HTML, CSS y JS. Tiene la funcion de enviar y recibir mensajes y mostrar la notificacion de los mismos',
            background:wapp
        },
        {
            name:'Aplicacion de Recordatorio',
            description:'Aplicacion que te manda una alerta sonora y visual de tus pendientes, creado con HTML, CSS y TypeScript',
            background:reminder
        },
        {
            name:'Aplicacion de notas',
            description:'Puedes agregar, eliminar y editar el contenido de las notas, el contenido se guarda en localstorage, creado con HTML, CSS y JS. ',
            background:notes
        },
        {
            name:'Pendientes',
            description:'Primera aplicacion usando React, ejercicio simple para crear, eliminar y marcar los pendientes',
            background:todo
        },
        {
            name:'Juego Gato',
            description:'Juego clasico, funciona con 2 jugadores e indica el ganador, creado con HTML, CSS y JS. ',
            background:tictactoe
        }
    ]
    return(
        <div className="flex flex-col justify-evenly h-[150vh]">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Projectos</h1>
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