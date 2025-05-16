import './App.css'
import { Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App
