import '../styles/portfolio.css'
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export function Footer(){
    return(
        <footer className="flex justify-center absolute bottom-0 left-0 right-0 item4 rounded-md">
            <ul className="flex-1 flex justify-start gap-5 text-xl px-2">
                <li><SiGmail /></li>
                <li><SiLinkedin /></li>
                <li><SiGithub /></li>
            </ul>
            <ul className="flex-1 flex justify-end">
                <li>&#169;2023 Carlos Zalpa</li>
            </ul>
        </footer>
    )
}