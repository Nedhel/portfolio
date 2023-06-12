import { SiReact, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiGit, SiGithub, SiJirasoftware } from "react-icons/si";
import {BsQuestionOctagon} from "react-icons/bs";

export function Skill({skill}){
    let element;
    switch (skill.name) {
        case 'HTML':
                element=<SiHtml5 className={` text-4xl`} />
            break;
        case 'CSS':
                element=<SiCss3 className={` text-4xl`} />
            break;
        case 'JAVASCRIPT':
                element=<SiJavascript className={` text-4xl`} />
            break;
        case 'REACT':
                element=<SiReact className={` text-4xl`} />
            break;
        case 'GIT':
                element=<SiGit className={` text-4xl`} />
            break;
        case 'GITHUB':
                element=<SiGithub className={` text-4xl`} />
            break;
        case 'TAILWIND':
                element=<SiTailwindcss className={` text-4xl`} />
            break;
        case 'JIRA':
                element=<SiJirasoftware className={` text-4xl`} />
            break;    
        default: element=<BsQuestionOctagon className={` text-4xl`} />
            break;
    }
    return(
        <div className="flex flex-col justify-around items-center w-14 md:w-16 lg:w-28 gap-2">
            <h3 className="lg:text-lg text-base font-bold">{skill.name}</h3>
            <div>{element}</div>
            <div className="w-full rounded-md bg-slate-200">
                <div className={`h-full bg-[#EBB607] ${skill.percentage} rounded-md text-base text-center`}>{skill.knowladge}/100</div>
            </div>
        </div>
    )
}