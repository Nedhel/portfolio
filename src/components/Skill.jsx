import { SiReact, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiGit, SiGithub, SiJirasoftware } from "react-icons/si";
import {BsQuestionOctagon} from "react-icons/bs";

export function Skill({skill}){
    let element;
    switch (skill.name) {
        case 'HTML':
                element=<SiHtml5 className={`${skill.textColor} text-4xl`} />
            break;
        case 'CSS':
                element=<SiCss3 className={`${skill.textColor} text-4xl`} />
            break;
        case 'JAVASCRIPT':
                element=<SiJavascript className={`${skill.textColor} text-4xl`} />
            break;
        case 'REACT':
                element=<SiReact className={`${skill.textColor} text-4xl`} />
            break;
        case 'GIT':
                element=<SiGit className={`${skill.textColor} text-4xl`} />
            break;
        case 'GITHUB':
                element=<SiGithub className={`${skill.textColor} text-4xl`} />
            break;
        case 'TAILWIND':
                element=<SiTailwindcss className={`${skill.textColor} text-4xl`} />
            break;
        case 'JIRA':
                element=<SiJirasoftware className={`${skill.textColor} text-4xl`} />
            break;    
        default: element=<BsQuestionOctagon className={`${skill.textColor} text-4xl`} />
            break;
    }
    return(
        <div className="flex flex-col justify-around items-center w-28 h-32">
            <h3 className="text-lg font-bold">{skill.name}</h3>
            <div>{element}</div>
            <div className="w-full h-2 rounded-md bg-gray-900">
                <div className={`h-full ${skill.bgColor} ${skill.percentage} rounded-sm`}></div>
            </div>
        </div>
    )
}