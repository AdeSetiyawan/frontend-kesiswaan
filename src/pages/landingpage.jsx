import logo from '../assets/img/logo/LogoProvJateng.png'
import logoSkanja from '../assets/img/logo/logoSkanja.png'
import hero1 from '../assets/img/other/learning.svg'
import {InputText} from '../assets/components/inputtext.jsx'
import {Copyright} from '../config/copyright.jsx';
import { useEffect, useState } from 'react'
import BtnPrimary from '../assets/components/buttonPrimary.jsx'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom'
import MessageValidate from '../assets/components/msgValidate.jsx'
import useAuth from '../hooks/useAuth.js'
import { CircularProgress, Tooltip } from '@mui/material';
function LandingPage(){
    const Navigate =useNavigate();
    const [form, setForm ] = useState({username:"", password:""});
    const [check, setCheck]=useState(false);
    const [msgUsername, setMsgUsername] =useState();
    const [msgPassword, setMsgPassword] =useState();
    const {user,login} = useAuth();
    const navigate = useNavigate();
    const [peringatan, setPeringatan] = useState("");
    const [loading, setLoading]= useState(false);

    
    if(user !== null){
        navigate('/dashboard');
    }
    
    const handleChange =(e) =>{
            setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(form.username !== "" && form.password !=="")
        {
            setLoading(true);
            setPeringatan("");
             try {
                    await login(form.username, form.password)
                Navigate('/dashboard');
            }
            catch(err){
                setPeringatan('Ada kesalahan ketika login menggunakan username dan password anda, silahkan periksa ulang atau hubungi admin!' );
                setForm({username:"",password:""});
                 setMsgUsername("");
                  setMsgPassword("");
                  setLoading(false);
            }finally {
            setLoading(false); // ⬅️ Stop loading
            }
        }else{
            if(form.username === ""){
                setMsgUsername("Username wajib diisi!");
            }else{
                setMsgUsername("");
            }
            if(form.password === ""){
                setMsgPassword("Password wajib diisi!");
            }else{
                setMsgPassword("");
            }
        }
        // Kirim data ke backend di sini
      };

    const showPassword = () =>{
        if(check === false ){
            setCheck(true)
        }else{
            setCheck(false)
        }
        
    }

    useEffect(() => {
        document.body.className = "bg-[url('/img/bg.jpg')] bg-cover bg-center min-h-screen"; // atau Tailwind class lain
        return () => {
          document.body.className = ""; // reset saat komponen unmount
        };
      }, []);


    return (
        <div className="container m-auto  relative text-gray-800 text-lg h-screen">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-[80%] md:w-[60%] lg:w-[60%]">
                <div className="flex">
                    <div className="bg-orange-600 w-full p-4 text-gray-700 rounded-2xl md:rounded-none md:rounded-l-xl md:w-[50%] lg:w-[50%]">
                        <div className='flex flex-row justify-center md:justify-start lg:justify-start  gap-2'>
                            <div>
                                <img src={logo}  alt="Logo Provinsi Jawa Tengah" className="mx-auto mb-4 w-10 h-10"  />
                            </div>
                            <div>
                                <img src={logoSkanja}  alt="Logo Provinsi Jawa Tengah" className="mx-auto mb-4 w-10 h-10"  />
                            </div>
                            <div className='flex  flex-col text-[6pt] gap-0 text-white tracking-wide'>
                                <div>
                                    Dinas Pendidikan
                                </div>
                                <div>
                                    Provinsi Jawa Tengah
                                </div>
                                <div className=' font-extrabold'>
                                    SMK Negeri 1 Jatiroto
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <div className="text-lg md:text-2xl lg:text-2xl tracking-wider font-extrabold pb-2 w-full">
                               
                                <div className='w-full text-center md:text-start lg:text-start text-white'>
                                    <p className='text-2xl flex items-start'>
                                        <span className='font-extrabold'>
                                            SiSKANJA
                                        </span>
                                        <Tooltip title="Sistem Informasi SMK Negeri 1 Jatiroto, adalah sebuah sistem informasi yang digunakan untuk membantu dalam proses pemanajemenan informasi dan administrasi terkait seluruh kegiatan yang ada dalam sekolah. Meliputi Kesiswaan, kurikulum, humas dan Sarpras. ">
                                            <InfoIcon fontSize='small'/>
                                        </Tooltip>
                                    </p>
                                
                                </div>
                            </div>
                            {
                                peringatan !== "" ? 
                                <>
                                    <div className='text-[10pt] rounded-2xl bg-red-800 p-3 text-gray-100'>
                                        Status : <br/>
                                        <p align="justify" className='text-[8pt] font-extralight'>
                                            {peringatan}
                                        </p>
                                    </div>
                                </>
                                
                                :""
                            }
                            <div className="p-2 flex flex-col text-white">
                                <InputText placeholder='Username' name="username" id="username" value={form.username} onChange={handleChange}/>
                                <MessageValidate msgvalidate={msgUsername} icon={<ReportGmailerrorredIcon fontSize='small'/>} />
                            </div>  
                            <div className="p-2 flex flex-col text-white relative">
                                <InputText type={ check ? "text":"password"} placeholder='Password' name="password" id="password" value={form.password} onChange={handleChange} className="w-full"/>
                                    <div className='absolute top-6 right-3 text-[8pt] flex  gap-2'>
                                        
                                        <label onClick={showPassword} className=''>
                                            {
                                                check ?  <VisibilityOffIcon fontSize='small'/> : <VisibilityIcon fontSize='small'/>
                                            }
                                           
                                        </label>
                                    </div>
                                <MessageValidate msgvalidate={msgPassword} icon={<ReportGmailerrorredIcon fontSize='small'/>} />

                            </div> 
                            <div className="p-2 flex flex-col text-white">
                                <BtnPrimary name="login" label={loading ? 
                                    
                                        <>
                                        <CircularProgress size="30px" />
                                         </>
                                    : "LOGIN"} disabled={loading}  icon={<FingerprintIcon/>}/>
                            </div> 
                            <div>
                                
                            </div>
                        </form>
                        <div className='text-[8px] block sm:hidden text-center mt-4 text-white tracking-wider'>
                                   <Copyright />
                        </div>
                    </div>
                    <div className=" hidden md:block md:w-[50%] lg:w-[50%] text-gray-700 tracking-wider bg-gray-50 rounded-r-2xl">
                            <div className='relative h-full min-h-[300px] flex items-center justify-center flex-col gap-2'>
                                <img src={hero1}  alt="Logo Provinsi Jawa Tengah" className="  w-60 h-60 rounded-2xl"  />
                                <div className='text-[8px] hidden sm:block'>
                                    <Copyright />
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;