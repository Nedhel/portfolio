import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'
import wapp1 from '../assets/wapp1.jpg'
import wapp2 from '../assets/wapp2.jpg'

export function Latestwork(){
    return(
        <div className="h-screen">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Projectos</h1>
            <Card name='Clone de Wa' description='Creado con JS y HTML' photos={[wapp1,wapp2]}/>
        </div>
    )
}