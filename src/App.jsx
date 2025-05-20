import './App.css'
import { Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Dashboard from './pages/dashboard';
import Middleware from './hooks/protectedroute';
import '@fontsource/roboto'; // default weight 400
import Beranda from './pages/dashboard/beranda';
import Pelanggaran from './pages/dashboard/pelanggaran';
 const LandingPage = lazy(()=>import('./pages/landingpage'));
 const NotFound = lazy(()=>import('./pages/NotFound'));


function App() {
  return (
    <Suspense fallback={
      <div className='relative w-screen h-screen'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <span className="loading loading-dots loading-xl "></span>
        </div>
      </div>
    }>
      <Routes>
        <Route path='/' element={<LandingPage />} />

          <Route path='/dashboard' element={
            <Middleware>
              <Dashboard />
            </Middleware>
          }>
            
                <Route index element={<Beranda />} />  default child route 
                <Route path='beranda' element={<Beranda />} />
                <Route path='pelanggaran' element={<Pelanggaran />} />
          
          </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App
