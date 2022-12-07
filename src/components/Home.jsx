import Carlos from '../assets/CarlosZ.png'
import { DiCode } from "react-icons/di";

export function Home(){
    return (
        <div className='bg-conic h-screen'>
            <div className='flex border justify-between'>
                <div className='w-1/3'>
                    <h6>Front-End Developer</h6>
                    <h1>Carlos Zalpa</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras dictum eget elit sed interdum. Donec elit mauris, 
                        vestibulum vitae mi vel, porta cursus lectus. 
                        Donec in aliquam leo, ac vulputate nibh. Morbi leo neque, 
                        sagittis malesuada ultricies eu, ullamcorper sed enim. Maecenas 
                        malesuada, eros et tincidunt consectetur, nulla risus lobortis enim, 
                        ac euismod lacus ligula nec metus
                    </p>
                </div>
                <div className='w-1/2'>
                    <div className='w-full'>
                        <div className='bg-gradient-to-tr from-transparent to-gray-700 text-sm p-3 max-w-fit break-normal'>
                            <p className='font-[Consolas]'>
                                <span className='text-sky-600'>const mySelf</span>=<span className='text-yellow-300'>&#123;</span>
                                <br /><span className='text-sky-200'>   fullName:</span><span className='text-amber-600'>'Carlos Nedhel Zalpa Garcia'</span>,
                                <br /><span className='text-sky-200'>   education:</span><span className='text-amber-600'>'Bachelor's Degree Computer System Engineer'</span> 
                                <br /><span className='text-yellow-300'>&#125;</span>
                            </p>
                        </div>
                    </div>
                    <div className='w-full'>
                    <div className='bg-gradient-to-tr from-transparent to-gray-700 text-sm p-3 max-w-fit break-normal'>
                        <p className='font-[Consolas]'>
                            <span className='text-amber-200'>.other</span><span className='text-fuchsia-500'>&#123;</span>
                            <br /><span className='text-sky-200'>   skill:</span><span className='text-amber-600'> Analytic mind, Work well in team</span>;
                            <br /><span className='text-sky-200'>   tools:</span><span className='text-amber-600'> Github, Jira, Tailwind</span> 
                            <br /><span className='text-sky-200'>   language:</span><span className='text-amber-600'> English</span> 
                            <br /><span className='text-fuchsia-500'>&#125;</span>
                        </p>
                    </div>
                    </div>
                    <div className='w-full'>
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
                </div>
            </div>
        </div>
    )
}