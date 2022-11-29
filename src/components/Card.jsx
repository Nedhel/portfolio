import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
export function Card(){
    return (
        <div className="border w-72  flex justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full transition-all hover:-translate-y-1/2 hover:scale-y-[3] border"></div>
            <div className="h-20">
                <SiWhatsapp className="text-6xl text-lime-700"/>
            </div>
        </div>
    )
}