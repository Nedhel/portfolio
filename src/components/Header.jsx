export function Header(){
    return(
        <ul className="flex border-b-2 justify-center">
            <li className="border p-2 w-1/3 hover:before:content-['<'] hover:after:content-['/>']">Carlos Zalpa</li>
            <li className="border p-2">Sobre mí</li>
            <li className="border p-2">Contacto</li>
            <li className="border text-right p-2 w-1/3">Es</li>
        </ul>
    )
}