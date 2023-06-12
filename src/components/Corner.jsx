export function Corner({position}){
    return(
        <span className={position==='left'?"w-1/5 aspect-square rounded-lg bg-gradient-to-tr from-[#EBB607] to-40% absolute left-0 bottom-0":"w-1/5 aspect-square rounded-lg bg-gradient-to-bl from-[#152982] to-40% absolute top-0 right-0"}>
            
        </span>
    )
}