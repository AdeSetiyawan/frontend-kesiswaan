export default function MessageValidate({msgvalidate, icon}){
    return (
          <div className=' text-[8pt] font-extralight text-right'>
            {
                msgvalidate && (
                    <div className='flex gap-1 items-center flex-row-reverse tracking-wider'>
                        {icon} {msgvalidate}
                    </div>
                ) 
            }
        </div>
    )
}