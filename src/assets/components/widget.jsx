export default function Widget({value,tinggi,lebar,style}){
    return (
        <div className={`bg-gray-800 ${lebar} shadow-lg p-2 rounded-md text-gray-200  ${tinggi} ${style}`}>
            {value}

        </div>
    )
}