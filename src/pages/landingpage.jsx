import logo from '../assets/img/logo/LogoProvJateng.png'
import logoSkanja from '../assets/img/logo/logoSkanja.png'
import img1 from '../assets/img/other/aset_img1.jpg'
import {InputText} from '../assets/components/inputtext.jsx'
import {Label} from '../assets/components/label.jsx'
import {Copyright} from '../config/copyright.jsx';
import { useEffect, useState } from 'react'
import BtnPrimary from '../assets/components/buttonPrimary.jsx'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function LandingPage(){

    const [form, setForm ] = useState({username:"", password:""});
    const [check, setCheck]=useState(false);
    
    const handleChange =(e) =>{
            setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", form);
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
                            <div className='flex  flex-col text-[6pt] gap-0 text-white'>
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
                                    <p className='text-2xl'>
                                        SIMAS
                                    </p>
                                    <p className='font-light text-[10pt] italic'>
                                        Sistem Informasi Manajemen Siswa
                                    </p>
                                
                                </div>
                            </div>
                            <div className="p-2 flex flex-col text-white">
                                <Label caption="Username" />
                                <InputText placeholder='Masukkan Username' name="username" id="username" value={form.username} onChange={handleChange}/>
                            </div> 
                            <div className="p-2 flex flex-col text-white relative">
                                <Label caption="Password" />
                                <InputText type={ check ? "text":"password"} placeholder='Masukkan Password' name="password" id="password" value={form.password} onChange={handleChange} className="w-full"/>
                                    <div className='absolute top-10 right-3 text-[8pt] flex  gap-2'>
                                        
                                        <label onClick={showPassword} className=''>
                                            {
                                                check ?  <VisibilityOffIcon fontSize='small'/> : <VisibilityIcon fontSize='small'/>
                                            }
                                           
                                        </label>
                                    </div>
                    

                            </div> 
                            <div className="p-2 flex flex-col text-white">
                                <BtnPrimary name="login" label="LOGIN" icon={<FingerprintIcon/>}/>
                            </div> 
                            <div>
                                
                            </div>
                        </form>
                        <div className='text-[8px] block sm:hidden text-center mt-4 text-white tracking-wider'>
                                   <Copyright />
                        </div>
                    </div>
                    <div className=" hidden md:block md:w-[50%] lg:w-[50%] text-gray-700 tracking-wider ">
                            <div className='relative h-full min-h-[300px] flex items-center justify-center flex-col gap-2'>
                                <img src={img1}  alt="Logo Provinsi Jawa Tengah" className="  w-60 h-60 rounded-2xl"  />
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