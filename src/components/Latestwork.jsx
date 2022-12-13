import {HiOutlineChip} from "react-icons/hi";
import {Card} from './Card'

export function Latestwork(){
    return(
        <div className="h-screen">
            <h1 className='font-bold text-2xl text-center'><HiOutlineChip className='inline text-terciary'/> Projectos</h1>
            <Card name='Clone de Wa'/>
        </div>
    )
}