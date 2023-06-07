import '../styles/portfolio.css'
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export function Footer(){
    return(
        <footer className="flex justify-center border">
            <ul className="border flex-1 flex justify-start gap-5 text-xl">
                <li className="border "><SiGmail /></li>
                <li className="border "><SiLinkedin /></li>
                <li className="border "><SiGithub /></li>
            </ul>
            <ul className="border flex-1 flex justify-end">
                <li>2023 Carlos Zalpa</li>
            </ul>
        </footer>
    )
}