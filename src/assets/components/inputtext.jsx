export function InputText ({type, placeholder="",value, onChange, name, id, className}){
    return (
        <>
            <input 
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='border-0 border-b border-b-gray-200 text-sm tracking-wider outline-none p-2 placeholder:text-[10px] text-gray-600 active:bg-orange-500 focus:bg-orange-400 transition-all ease-in-out duration-500  ${className}'
            />
        </>
    )   
}