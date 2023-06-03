export function Corner({position}){
    return(
        <span className={position==='left'?"w-1/5 aspect-square rounded-lg bg-gradient-to-br from-[#D5A025] via-[#152982] to-55% absolute left-0 top-0":"w-1/5 aspect-square rounded-lg bg-gradient-to-tl from-[#D5A025] via-[#152982] to-50% absolute bottom-0 right-0"}>
            
        </span>
    )
}