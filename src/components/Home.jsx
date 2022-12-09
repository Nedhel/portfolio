import Carlos from '../assets/CarlosZ.png'

export function Home(){
    return (
        <div className='bg-conic h-screen'>
            <div className='flex justify-around h-full items-center'>
                <div className='w-1/3 flex flex-col justify-around h-3/4 text-center'>
                    <h6 className='text-2xl text-terciary'>Front-End Developer</h6>
                    <div className='border-terciary border-4 rounded-full overflow-hidden w-48 p-1 self-center'>
                        <img src={Carlos} alt="Carlos Zalpa" className='w-36 rounded-full block m-auto'/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras dictum eget elit sed interdum. Donec elit mauris, 
                        vestibulum vitae mi vel, porta cursus lectus. 
                        Donec in aliquam leo, ac vulputate nibh. Morbi leo neque, 
                        sagittis malesuada ultricies eu, ullamcorper sed enim. Maecenas 
                        malesuada, eros et tincidunt consectetur, nulla risus lobortis enim, 
                        ac euismod lacus ligula nec metus
                    </p>
                    <button className='border-terciary border-2 text-terciary bg-transparent w-fit px-3 py-1 self-center'>Descargar CV</button>
                </div>
                <div className='w-1/2 h-3/4 flex flex-col justify-between'>
                    <div className='bg-gradient-to-tr from-transparent to-gray-700 p-3 max-w-fit'>
                        <p className='font-[Consolas]'>
                            <span className='text-sky-600'>const mySelf</span>=<span className='text-yellow-300'>&#123;</span>
                            <br /><span className='text-sky-200'>   fullName:</span><span className='text-amber-600'>'Carlos Nedhel Zalpa Garcia'</span>,
                            <br /><span className='text-sky-200'>   education:</span><span className='text-amber-600'>'Bachelor's Degree Computer System Engineer'</span> 
                            <br /><span className='text-yellow-300'>&#125;</span>
                        </p>
                    </div>
                    <div className='bg-gradient-to-tr from-transparent to-gray-700 p-3 max-w-fit self-center'>
                        <p className='font-[Consolas]'>
                            <span className='text-amber-200'>.other</span><span className='text-fuchsia-500'>&#123;</span>
                            <br /><span className='text-sky-200'>   skill:</span><span className='text-amber-600'> Analytic mind, Work well in team</span>;
                            <br /><span className='text-sky-200'>   tools:</span><span className='text-amber-600'> Github, Jira, Tailwind</span> 
                            <br /><span className='text-sky-200'>   language:</span><span className='text-amber-600'> English</span> 
                            <br /><span className='text-fuchsia-500'>&#125;</span>
                        </p>
                    </div>
                    <div className='bg-gradient-to-tr from-transparent to-gray-700 p-5 max-w-fit'>
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
            </div>
        </div>
    )
}