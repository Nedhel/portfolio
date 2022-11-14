import Carlos from '../assets/CarlosZ.png'

export function Home(){
    return (
        <div className='grid grid-cols-3 mt-8'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
            <div className=' justify-self-center animate-bounce'>
                <span className='bg-terciary p-2'>Front-End Developer</span>
            </div>
            <div className='row-span-5 mask'><img src={Carlos} alt="YO" /></div>
            <div className=''></div>
            <div className='justify-self-end'>
                <h1 className='text-6xl font-bold text-terciary'>Hola!!</h1>
            </div>
            <div className='justify-self-start w-full relative animate-pulse'>
                <div className='bg-gradient-to-tr from-transparent to-gray-700 text-sm absolute -left-36 p-3'>
                    <pre className='font-[Consolas] break-word'>
                        <span className='text-sky-600'>const mySelf</span>=<span className='text-yellow-300'>&#123;</span>
                        <br /><span className='text-sky-200'>   fullName:</span><span className='text-amber-600'>'Carlos Nedhel Zalpa Garcia'</span>,
                        <br /><span className='text-sky-200'>   education:</span><span className='text-amber-600'>'Bachelor's Degree Computer System Engineer'</span> 
                        <br /><span className='text-yellow-300'>&#125;</span>
                    </pre>
                </div>
            </div>
            <div className=''></div>
            <div className=''></div>
            <div className=''>
            </div>
            <div className='justify-self-start w-full animate-pulse'>
                <div className='bg-gradient-to-tr from-transparent to-gray-700 text-sm p-3'>
                    <pre className='font-[Consolas]'>
                        <span className='text-amber-200'>.other</span><span className='text-fuchsia-500'>&#123;</span>
                        <br /><span className='text-sky-200'>   skill:</span><span className='text-amber-600'> Analytic mind, Work well in team</span>;
                        <br /><span className='text-sky-200'>   tools:</span><span className='text-amber-600'> Github, Jira, Tailwind</span> 
                        <br /><span className='text-sky-200'>   language:</span><span className='text-amber-600'> English</span> 
                        <br /><span className='text-fuchsia-500'>&#125;</span>
                    </pre>
                </div>
            </div>
            <div className=''></div>
            <div className=''></div>
            <div className='col-span-2 justify-self-center animate-pulse'>
                <div className='bg-gradient-to-tr from-transparent to-gray-700 text-sm p-5'>
                    <p className='font-[Consolas]'>
                        <span className='text-teal-500'>&#60;Myself</span>
                        <span className='text-sky-300'> knowladge</span>=
                        <span className='text-amber-600'>'JavaScript,HTML,CSS,React'</span> 
                        <span className='text-sky-300'> className</span>=
                        <span className='text-sky-600'>&#123;<span className='text-amber-200'>other</span>&#125;</span> 
                        <span className='text-teal-500'> &#47;&#62;</span>
                    </p>
                </div>
            </div>
            <div className=''></div>
        </div>
    )
}