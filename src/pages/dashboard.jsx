// images
import logo from '../assets/img/logo/LogoProvJateng.png'
import logoSkanja from '../assets/img/logo/logoSkanja.png'

//hooks 
import useAuth from '../hooks/useAuth';

// component 
import Widget from '../assets/components/widget';

//react component
import { useEffect, useState } from 'react';
import {Navigate, Link, Outlet, useNavigate } from 'react-router-dom';

//API Resource
import api from "../config/axios";

//icon MUI 
import BadgeIcon from '@mui/icons-material/Badge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
//component MUI
import { CircularProgress, Skeleton } from '@mui/material';


export default function Dashboard(){
    const {logout} = useAuth();
    const [profil, setProfil] =useState(null);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState();
    const nav = useNavigate();


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



    const dashboard_refresh = () =>{
        nav('/dashboard/beranda');   
    }
    const Pelanggaran = () =>{
        nav('/dashboard/pelanggaran');
    }

    return (
        <div className="text-black">
            {/* desktop mode  */}
            <div className="w-screen h-screen bg-white ">
                <div className="flex flex-col">
                    <div className=' w-full p-2 bg-gray-900'>
                        <div className=' flex gap-2 items-center'>
                            <img src={logo} className=' w-2/16 md:w-2/32'/>
                            <img src={logoSkanja} className=' w-2/16 md:w-2/32'/>
                            <div className='text-[8pt] md:text-xl text-gray-200 tracking-wider px-4'>
                                <p>Dinas Pendidikan Provinsi Jawa Tengah</p>
                                <p>
                                    SMK Negeri 1 Jatiroto
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-900 h-screen">
                        
                        <div className=" h-screen overflow-y-auto p-3 ">
                            <div className='flex flex-col md:flex-row gap-4'>
                                <Widget tinggi=" h-38" lebar="w-full md:w-2/4 text-[8pt] "
                                    value={
                                        <>
                                        <div className=' tracking-wider'>
                                                <div className=' font-extrabold  py-2 text-lg ps-6'>
                                                    Selamat Datang,
                                                </div>
                                                <div className='flex gap-2 py-2 text-sm'>
                                                    <div className='w-1/8 m-auto text-center'>
                                                        <BadgeIcon fontSize='large'/>
                                                    </div>
                                                    <div className='flex flex-col gap-1 w-4/8 '>
                                                        <div>
                                                            {profil ? profil.data.nama_lengkap
                                                            :
                                                            <>
                                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='m-0' />
                                                            </>
                                                            }
                                                        </div>
                                                        <div className='text-[8pt] italic'>
                                                            {profil ? 'NIP '+profil.data.nip
                                                            : 
                                                            <>
                                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                                            </>
                                                            }
                                                        </div>
                                                        <div className=' bg-blue-800 w-2/8 text-gray-100 text-center rounded-md p-1 text-[8pt]'>
                                                            {profil ? profil.data.role
                                                            : 
                                                            <>
                                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='m-0' />
                                                            </>
                                                            }
                                                        </div>

                                                    </div>
                                                    <div className='w-2/8 m-auto flex flex-col gap-2'>
                                                        {profil ? 
                                                             <button  className=' w-full border-2 px-2 py-1 rounded-xl flex gap-1 text-[7pt] hover:bg-gray-700 cursor-pointer items-center active:bg-gray-600 text-center justify-center'><ManageAccountsIcon fontSize='small'/> Profil</button>
                                                        :
                                                            <>
                                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                                            </>
                                                        

                                                        }
                                                        {profil ? 
                                                            <button onClick={logout} className=' w-full border-2 px-2 py-1 rounded-xl flex gap-1 text-[7pt] hover:bg-gray-700 cursor-pointer items-center active:bg-gray-600 text-center justify-center'><LogoutIcon fontSize='small'/> Logout</button>
                                                            :
                                                            <>
                                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                                            </>
                                                        }   
                                                    </div>
                                                </div>
                                        </div>
        
                                        </>
                                    }
                                />
                                <Widget 
                                    tinggi=""
                                    lebar="w-full md:w-2/4"
                                    value={
                                        <div className='flex flex-wrap gap-2 justify-evenly items-center h-full'>
                                            {/* menu  */}
                                                <button className='w-3/8 md:w-3/16  bg-orange-700 flex flex-col justify-center items-center py-3 hover:bg-orange-600 active:bg-orange-500 cursor-pointer rounded-md shadow-sm' onClick={dashboard_refresh}>
                                                  <DashboardIcon sx={{ fontSize:60 }} />
                                                    
                                                    
                                                    <div id="caption_menu" className=' text-sm md:text-md tracking-wider'>
                                                        Dashboard
                                                    </div>
                                                </button>
                                            {/* menu  */}
                                            {/* menu  */}
                                                <button className='w-3/8 md:w-3/16  bg-orange-700 flex flex-col justify-center items-center py-3 hover:bg-orange-600 active:bg-orange-500 cursor-pointer rounded-md shadow-sm' onClick={Pelanggaran}>
                                                    <StickyNote2Icon sx={{ fontSize:60 }} />
                                                    <div id="caption_menu" className=' text-sm md:text-md tracking-wider'>
                                                        Pelanggaran
                                                    </div>
                                                </button>
                                            {/* menu  */}
                                            {/* menu  */}
                                                <button className='w-3/8 md:w-3/16  bg-gray-700 flex flex-col justify-center items-center py-3 hover:bg-orange-600 active:bg-orange-500 cursor-not-allowed
                                         rounded-md shadow-sm'>
                                                    <NoteAltIcon sx={{ fontSize:60 }} />
                                                    <div id="caption_menu" className=' text-sm md:text-md tracking-wider'>
                                                        Jurnal
                                                    </div>
                                                </button>
                                            {/* menu  */}
                                            {/* menu  */}
                                                <button className='w-3/8 md:w-3/16  bg-gray-700 flex flex-col justify-center items-center py-3 hover:bg-orange-600 active:bg-orange-500 cursor-not-allowed
                                                rounded-md shadow-sm'>
                                                    <LinearScaleIcon sx={{ fontSize:60 }} />
                                                    <div id="caption_menu" className=' text-sm md:text-md tracking-wider'>
                                                        --
                                                    </div>
                                                </button>
                                            {/* menu  */}
                                        </div>
                                    }
                                />
                                
                            </div>
                            <div className='mt-4'>
                                <Widget 
                                    tinggi=""
                                    lebar="w-full"
                                    style="text-sm font-extralight tracking-wider"
                                    value={
                                        <>
                                            <Outlet/>
                                        </>
                                    }
                                />
                            </div>

                           
                        </div>
                    </div>

                </div>
            </div>


            {/* mobile mode  */}
        </div>
    )
}