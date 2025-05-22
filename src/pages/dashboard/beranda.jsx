import { Await } from "react-router-dom"
import api from "../../config/axios"
import { useEffect, useState } from "react"
import Widget from "../../assets/components/widget"

export default function Beranda()
{
    const [state, setState]  = useState({
        siswa   : null,
        msg     : "",
        loading : false
    })

    const dataSiswa=async()=>{
        try{
            setState(prev =>({
                ...prev,
                loading:true
            }))
            const getSiswa = await api.get('/getSiswa')

            setState(prev =>({
                ...prev,
                siswa:getSiswa.data
            }))
        }
        catch(e){
            setState(prev =>({
                ...prev,
                msg:"Error : "+e
            }));
        }
        finally{
            setState(prev=>({
                ...prev,
                loading:false
            }))
        }
    } 

    

    useEffect(()=>{
        dataSiswa();
    },[])

    if(state.siswa === null ){
        return (<div className='relative w-full h-full p-4'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <span className="loading loading-dots loading-xl "></span>
        </div>
      </div>)
    }

    return (
        <div className="flex gap-2 flex-wrap justify-center items-center">
            <div className="w-3/8 md:w-2/16 shadow rounded-lg p-4 flex flex-col justify-center items-center tracking-wider bg-indigo-900">
                <div>
                    Total Siswa
                </div>
                <div>
                    {
                        state.siswa.data?.length
                    }
                </div>
            </div>
            <div className="w-3/8 md:w-2/16 shadow bg-emerald-900 rounded-lg p-4 flex flex-col justify-center items-center tracking-wider">
                <div>
                    Total Siswa
                </div>
                <div>
                    {
                        state.siswa.data?.length
                    }
                </div>
            </div>
        </div>
    )
}