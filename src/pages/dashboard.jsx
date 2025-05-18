import LogoutIcon from '@mui/icons-material/Logout';
import {Navigate, Link } from 'react-router-dom';
import logo from '../assets/img/logo/LogoProvJateng.png'
import logoSkanja from '../assets/img/logo/logoSkanja.png'
import useAuth from '../hooks/useAuth';
import Widget from '../assets/components/widget';
import { useEffect, useState } from 'react';
import api from "../config/axios";
import BadgeIcon from '@mui/icons-material/Badge';
export default function Dashboard(){
    const {logout} = useAuth();
    const [profil, setProfil] =useState(null);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState();


    useEffect(()=>{
        const dapatProfil = async()=>{
            setLoading(true);
            try{
                const profil = await api.get('/user');
                setProfil(profil.data);
            }
            catch(e){
                setMsg(e);
            }
            finally{
                setLoading(false);
            }
        }
        dapatProfil();
    },[]);


    
    const handleLoogut =()=>{
        logout();
        Navigate('/');
    }

    return (
        <div className="text-black">
            {/* desktop mode  */}
            <div className="w-screen h-screen bg-white ">
                <div className="flex">
                    
                    <div className="w-full bg-gray-900 h-screen">
                        <div className=" h-screen overflow-y-auto p-3 flex flex-col md:flex-row gap-4">
                            <Widget tinggi=" h-38" lebar="w-full md:w-2/4 text-[8pt] "
                                value={
                                    <>
                                    <div className=' tracking-wider'>
                                            <div className=' font-extrabold  py-2 text-lg'>
                                                Selamat Datang,
                                            </div>
                                            <div className='flex gap-2 py-2 text-sm'>
                                                <div className='w-1/8 m-auto text-center'>
                                                    <BadgeIcon fontSize='large'/>
                                                </div>
                                                <div className='flex flex-col gap-1 w-4/8 '>
                                                    <div>
                                                        {profil ? profil.data.nama_lengkap:""}
                                                    </div>
                                                    <div className='text-[8pt] italic'>
                                                        NIP {profil ? profil.data.nip:""}
                                                    </div>
                                                    <div className=' bg-blue-800 w-2/8 text-gray-100 text-center rounded-md p-1 text-[8pt]'>
                                                         {profil ? profil.data.role:""}
                                                    </div>

                                                </div>
                                                <div className='w-2/8 m-auto'>
                                                    <button onClick={logout} className=' border-2 px-2 py-1 rounded-xl flex gap-1 text-[7pt] hover:bg-gray-700 cursor-pointer items-center active:bg-gray-600'><LogoutIcon fontSize='small'/> Logout</button>
                                                </div>
                                            </div>
                                    </div>
     
                                    </>
                                }
                            />
                            <Widget 
                                tinggi="h-38"
                                lebar="w-full md:w-2/4"
                            />
                        </div>
                    </div>

                </div>
            </div>


            {/* mobile mode  */}
        </div>
    )
}