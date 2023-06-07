import {About} from './About'
export function Main(){
    return(
        <main className="border flex-1 flex ">
            <div className="border">
                <ul>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="border border-red-500">
                <About/>
            </div>
        </main>
    )
}