import { Await } from "react-router-dom"
import api from "../../config/axios"
import { useEffect, useState } from "react"

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
        return "<p>Loading ... </p>";
    }

    return (
        <>
            <h1>
                Silahkan anda memanfaatkan fasilitas kami
            </h1>

            <ul>
                {
                    state.siswa.data?.length
                }
            </ul>
        </>
    )
}