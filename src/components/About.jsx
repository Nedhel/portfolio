import { SiReact, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiGit, SiGithub, SiJirasoftware } from "react-icons/si";

export function About(){
    return (
    <div className="text-4xl">
        <label htmlFor="react-icon">React</label>
        <SiReact id="react-icon" className="text-sky-500" />
        <div className="w-[75px] h-2 rounded-md border"><div className="w-1/2 h-full bg-yellow-400"></div></div>
        <br />
        <SiHtml5 className="text-orange-500" />
        <SiCss3 className="text-blue-800" />
        <SiTailwindcss className="text-sky-400" />
        <SiJavascript className="text-yellow-400" />
        <SiGit className="text-orange-700" />
        <SiGithub className="" />
        <SiJirasoftware className="text-cyan-600" />        
    </div>
    )
}