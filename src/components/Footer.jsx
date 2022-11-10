import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

export function Footer(){
    return(
        <footer className="bg-primary flex flex-wrap justify-evenly">
            <div className="w-1/3">
                <span>Carlos <strong>Zalpa</strong></span>
            </div>
            <div className="w-1/3 flex justify-end">
                <SiGithub className="text-2xl mx-3" />
                <SiGmail className="text-2xl mx-3" />
                <SiLinkedin className="text-2xl mx-3" />
            </div>
            <div className="w-full text-right border-b-2 border-terciary text-xs">
                <p>&#169; 2022. All Rights Reserved.</p>
            </div>
        </footer>
    )
}