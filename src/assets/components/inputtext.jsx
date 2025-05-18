export function InputText ({type, placeholder="",value, onChange, name, id, className}){
    return (
        <>
            <input 
                type={type}
                name={name}
                id={id}
                autoComplete="off"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='border-0 border-b border-b-gray-200 text-sm tracking-wider outline-none p-2 placeholder:text-[10px] placeholder:text-gray-200 placeholder:font-extralight placeholder:italic placeholder:ml-2 text-gray-600 active:bg-orange-500 focus:bg-orange-400 transition-all ease-in-out duration-500  ${className}'
            />
        </>
    )   
}