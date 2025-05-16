export default function BtnPrimary ({name="", type="submit",label="Button",icon}){
    return (
        <>
            <button 
            name={name}
            type={type}
            className=" text-sm 
             tracking-wider
             font-light
             py-2 rounded-full 
             bg-blue-800
             hover:bg-blue-600
             transition-all
             duration-300
             ease-in-out
             active:bg-blue-700
             cursor-pointer
            "
            >
                <div className="flex gap-1 justify-center items-center">
                    <div>
                     {icon && <span>{icon}</span>}
                    </div>
                    <div>
                        {label}
                    </div>

                </div>
            </button>
        </>
    )
}