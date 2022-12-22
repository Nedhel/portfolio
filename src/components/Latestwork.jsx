import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'
import wapp1 from '../assets/wapp1.jpg'
import wapp2 from '../assets/wapp2.jpg'

export function Latestwork(){
    return(
        <div className="flex flex-col justify-evenly h-[150vh]">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Projectos</h1>
            <div className="flex justify-evenly">
                <Card name='Clone de Wa' description='Clone de Wapp usando unicamente HTML,CSS y JS, tiene algunas funciones como enviar y recibir msj' photos={[wapp1,wapp2]}/>
                <Card name='Clone de Wa' description='Clone de Wapp usando unicamente HTML,CSS y JS, tiene algunas funciones como enviar y recibir msj' photos={[wapp1,wapp2]}/>
            </div>
            <div className="flex justify-evenly">
                <Card name='Clone de Wa' description='Clone de Wapp usando unicamente HTML,CSS y JS, tiene algunas funciones como enviar y recibir msj' photos={[wapp1,wapp2]}/>
                <Card name='Clone de Wa' description='Clone de Wapp usando unicamente HTML,CSS y JS, tiene algunas funciones como enviar y recibir msj' photos={[wapp1,wapp2]}/>
                <Card name='Clone de Wa' description='Clone de Wapp usando unicamente HTML,CSS y JS, tiene algunas funciones como enviar y recibir msj' photos={[wapp1,wapp2]}/>
            </div>
        </div>
    )
}